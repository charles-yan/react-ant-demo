import React,{useEffect} from 'react'
import AdminUi from '../ui/AdminUi'
import { useDispatch} from 'react-redux'
import { activeCreator as ac } from "../../store/modules/authUser/index"
import store from "../../store/index"
import { Redirect } from 'react-router-dom'

const Admin = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ac.loadDataSyncSaga());
        let user = store.getState();
        let user_id=user.useReducer.id;
        if (!localStorage.getItem("jwt_token") && !user_id) {
            return <Redirect to='/login' />
        };
        return () => {
            
        }
    }, [dispatch])
    return (
        <AdminUi></AdminUi>
    )
}
export default Admin