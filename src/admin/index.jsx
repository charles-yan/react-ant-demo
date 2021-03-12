// import React, { useState,useCallback,useEffect,useReducer } from 'react';
// import { useDispatch} from 'react-redux'
// import { activeCreator as ac } from "../store/modules/authUser/index"
// import { Redirect } from 'react-router-dom'
// import store from "../store/index"

// const Admin = props => {
//   const dispatch = useDispatch();
//   dispatch(ac.loadDataSyncSaga());
  
//   let user=store.getState();
//   let user_id=user.getIn(["useReducer", "id"]);
//   if(!localStorage.getItem("jwt_token")&&!user_id){
//     return <Redirect to='/login'/>
//   };

// }

// export default Admin;


