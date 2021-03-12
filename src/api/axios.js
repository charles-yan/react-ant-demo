import axios from 'axios'
const {api_auth} =require("../plugin/index.js")

const app_config={
    appkey:'1224283400',
    secret:'qazwsxedcrfv',
  }
/*** 全局拦截器 ***/
axios.interceptors.request.use(function(config) {
    //调用 api 签名加密服务
    config=api_auth(config,app_config);
    if (window.localStorage.getItem('jwt_token')) {
      config.headers['Authorization'] = 'Bearer ' + window.localStorage.getItem('jwt_token')
    }
    return config;
  }, function(err) {
    return Promise.reject(err);
});
  export default axios;