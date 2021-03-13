import { call, put, takeEvery } from 'redux-saga/effects';
import axios from '../../../api/axios'
import activeCreator from "./activeCreator"
import Jwt from "../../../api/jwt"

function* setDataAsync() {
    console.log("setDataAsync++++");
    let res = yield call(axios.get,{url:"/api/admin/auth"});
    if(res.status === "error") return Jwt.removeToken();
    yield put(activeCreator.setDataSync(res.data))
}

function* loadData() {
    console.log("loadData++++");
    yield takeEvery('setAuthDataSaga', setDataAsync)
}
export default loadData