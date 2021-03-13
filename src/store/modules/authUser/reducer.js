// import {SET_AUTH_USER,UNSET_AUTH_USER} from '../../activeTypes'
const defaultState = {
    outhenticated: false,
    name: null,
    username: null,
    avatar: null,
    id: null,
    loginhenticated: false,
    isDisabled:true
}
const reducer = (state=defaultState,action) => {
    console.log("SET_AUTH_USER",action)
    switch (action.type) {
        case "SET_AUTH_USER":
            let {id,username,avatar}=action.user;
            return Object.assign({},state,{
                id,
                avatar,
                username
            })
        case "UNSET_AUTH_USER":

            break;
        default:
            return state
    }
}



export default reducer
