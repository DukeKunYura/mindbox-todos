import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IDataItem, TData, TLink, TState } from '../interfaces/data';

const initialState: TState = {
    activeLink: "all",
    todos: []
};

export const masterSlice = createSlice({
    name: 'master',
    initialState,
    reducers: {
        setActiveLink: (state, action: PayloadAction<TLink>) => {
            state.activeLink = action.payload
        },
        setTodos: (state, action: PayloadAction<TData>) => {
            state.todos = action.payload
        },
        addTodo: (state, action: PayloadAction<IDataItem>) => {
            state.todos = [action.payload, ...state.todos]
        },
        clearCompleted: (state) => {
            state.todos = state.todos.filter(todo => todo.completed === false)
        },
        toggleCompleted(state, action: PayloadAction<string>) {
            state.todos = state.todos.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
        }
    }
})


export const {
    setActiveLink,
    setTodos,
    addTodo,
    clearCompleted,
    toggleCompleted
} = masterSlice.actions

export default masterSlice.reducer