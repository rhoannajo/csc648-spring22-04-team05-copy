import { combineReducers } from "redux"
import todoReducer from "./todoReducer"
import userReducer from '../../features/userSlice';
import loginReducer from "./loginReducer";
import taskReducer from "./taskReducer";
import deleteReducer from "./deleteReducer";

// root reducer 
export default combineReducers({
    todo: todoReducer,
    user: userReducer,
    login: loginReducer,
    add: taskReducer,
    delete: deleteReducer,
})

