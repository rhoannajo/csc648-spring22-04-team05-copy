import { createSlice } from "@reduxjs/toolkit";

// Function to accept an initial state for our login and logout states
export const userSlice = createSlice({
    name:'user',
    initialState:{
        user: null,
    },
    reducers:{
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    }
});

export const {login, logout} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;