import React from 'react'
import AdminUi from '../ui/AdminUi'
import { useDispatch,useSelector} from 'react-redux'
import { activeCreator as ac } from "../../store/modules/authUser/index"
import store from "../../store/index"
import { Redirect } from 'react-router-dom'

const Admin = (props) => {
    const dispatch = useDispatch();
    dispatch(ac.loadDataSyncSaga());

    let user = store.getState();
    let user_id = user.getIn(["useReducer", "id"]);
    console.log("user_id+++",user_id);
    if (!localStorage.getItem("jwt_token") && !user_id) {
        return <Redirect to='/login' />
    };
    return (
        <AdminUi></AdminUi>
    )
}
export default Admin