import React, { Component } from 'react'
import { connect } from 'react-redux'
@connect((state)=>{
    return{
        count:state.countReducer.count
    }
},null)

 class ComB extends Component {
    render() {
        return (
            <div>
                {this.props.count}
            </div>
        )
    }
}
export default ComB
