import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeLink: "all",
    todos: []
};

export const masterSlice = createSlice({
    name: 'master',
    initialState,
    reducers: {
        setActiveLink: (state, action) => {
            state.activeLink = action.payload
        },
        setTodos: (state, action) => {
            state.todos = action.payload
        },
    }
})


export const {
    setActiveLink,
    setTodos,
} = masterSlice.actions

export default masterSlice.reducer