import React, { Component, useEffect, useState,useReducer } from 'react'
import { connect } from 'react-redux'
import {activeCreator as setCount} from "../store/modules/addCount/index"
import { activeCreator as ac } from "../store/modules/authUser/index"
import store from "../store/index"
import { useDispatch,} from 'react-redux'

// @connect(()=>{
//     // 接收数据
// },(dispatch)=>({
//     //发送数据
//     sendAdd(){
//         const action=setCount()
//         dispatch(action)
//     }
// }))

// class ComA extends Component {
//    componentDidMount(){
//         // store.dispatch(setCount())
//         store.dispatch(ac.loadDataSyncSaga())
//    };
//     render() {
//         return (
//             <div>
//                 {/* onClick={this.props.sendAdd} */}
//                 <button type="success" >+</button>
//             </div>
//         )
//     }
// }
const ComA=()=>{
    // const dispatch = useDispatch();
   
    // useEffect(()=>{
    //   dispatch(ac.loadDataSyncSaga());
    // },[dispatch])

    return (
                    <div>
                        {/* onClick={this.props.sendAdd} */}
                        <button type="success" >+</button>
                    </div>
                )
}
export default ComA
