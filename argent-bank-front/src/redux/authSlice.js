import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    token: localStorage.getItem('token') || null,
    user: localStorage.getItem('user') || null,
    status: null,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.status = 'success';
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.token = null;
            state.user = null;
            state.status = 'failure';
            state.error = action.payload;
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
            state.status = null;
            state.error = null;
        },
    },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;