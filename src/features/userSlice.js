import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 2;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { increment, decrement, login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export const selectIncDec = (state) => state.user.value;

export default userSlice.reducer;
