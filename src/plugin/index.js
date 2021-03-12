const md5 = require('md5');

function joinParams(params) {
    var str = '';
    for (var key in params) {
        str += key + '=' + params[key] + '&';
    };
    str = str.slice(0, -1);
    return str;
};

function api_auth(config, app_config) {
    //api 签名加密服务
    let timestamp = parseInt((Date.now()) / 1000);
    let { url, method, data } = config;
    let form = {
        timestamp,
        appkey: app_config.appkey
    }
    if (method === 'get') {
        let sign_url = auth_get(url, form, app_config);
        config.url = sign_url;
    } else if (method === 'post') {
        if (data.constructor === FormData) {
            config.data = data;
        } else {
            let body = auth_post(data, form, app_config);
            let arr = Object.keys(body);
            arr.sort();
            let obj = {};
            arr.forEach((item, index) => {
                obj[item] = body[item];
            })
            config.data = obj;
        }
    } else if (method === 'delete') {
        let sign_url = auth_get(url, form, app_config);
        config.url = sign_url;
    } else if (method === 'put') {
        let body = auth_post(data, form, app_config);
        let arr = Object.keys(body);
        arr.sort();
        let obj = {};
        arr.forEach((item, index) => {
            obj[item] = body[item];
        })
        config.data = obj;
    }
    return config;
}
function auth_get(api, form, app_config) {
    let _api=api.url;
    let params = get_url_parms_obj(_api);

    let _route = _api.split("?")[0];
    params = Object.assign(params, form);
    let str_data = jsonSort(params) + app_config.secret;
    var sign = md5(str_data);
    params.sign = sign.toUpperCase();
    let str_params = joinParams(params);
    let sign_url = _route + '?' + str_params;
    return sign_url;
}

function auth_post(params, form, app_config) {
    params = Object.assign(params, form);
    let str_data = jsonSort(params) + app_config.secret;
    var sign = md5(str_data);
    params.sign = sign.toUpperCase();
    return params;
}
function get_url_parms_obj(url) {
    var params = {};
    //检测是否存在?   decode解析中文字符串
    url = decodeURI(url);
    if (url.indexOf("?") !== -1) {
        url = url.split("?")[1];
    } else {
        return params;
    }
    var arr = url.split("&");
    for (var i = 0; i < arr.length; i++) {
        if (!!arr[i]) {
            var arr_ = arr[i].split("=");
            var parm_key = arr_[0];
            var parm_value = arr_[1];
            params[parm_key] = parm_value;
        }
    }
    return params;
}
function jsonSort(jsonObj) {
    let str = '';
    let arr = Object.keys(jsonObj);
    arr.sort();
    arr.forEach((item, index) => {
        str += item + jsonObj[item];
    })
    return str
}

export {
    joinParams,
    api_auth,
    auth_get,
    auth_post,
    get_url_parms_obj,
    jsonSort
}