// import {SET_AUTH_USER} from '../../activeTypes'
// import axios from '../../../api/axios'
const setDataSync= user => { //同步的
    return {
        type:"SET_AUTH_USER",
        user
    }
}
// const setDataAsync=()=>{
//     return async (dispatch)=>{
//         let result = await axios.get("/api/admin/auth");
//         dispatch(setDataSync(result.data))
//     }
// }

const loadDataSyncSaga=()=>{
    return{
        type:"setAuthDataSaga"
    }
}
export default {
    setDataSync,
    loadDataSyncSaga
}