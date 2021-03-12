import { call, put, takeEvery } from 'redux-saga/effects';
import axios from '../../../api/axios'
import activeCreator from "./activeCreator"

function* setDataAsync() {
    let res = yield call(axios.get,{url:"/api/admin/auth"});
    yield put(activeCreator.setDataSync(res.data))
}

function* loadData() {
    yield takeEvery('setAuthDataSaga', setDataAsync)
}
export default loadData