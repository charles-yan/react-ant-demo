const initState={
    count:0
}
const reducer =(state=initState,action)=>{
    console.log("add_count++",action)
    switch(action.type){
        case "add_count":
            return {
                count:state.count + 1
            }
        default:
           return state
    }
}
export default reducer