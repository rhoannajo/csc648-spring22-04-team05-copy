import { combineReducers } from "redux"
import todoReducer from "./todoReducer"
import userReducer from '../../features/userSlice';

// root reducer 
export default combineReducers({
    todo: todoReducer,
    user: userReducer,
})

