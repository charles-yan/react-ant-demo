import { combineReducers } from 'redux'
import {readucer as useReducer} from './modules/authUser/index';
import {readucer as countReducer} from "./modules/addCount/index"
const reducer = combineReducers({
    useReducer,
    countReducer
}) //reducer集合 
export default reducer