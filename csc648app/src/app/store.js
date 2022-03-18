import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/userSlice';
import todoReducer from "../redux/reducers/todoReducer";
import taskReducer from "../redux/reducers/taskReducer";

export default configureStore({
    reducer:{
        user: userReducer,
        todo: todoReducer,
        add: taskReducer,
    }
})
