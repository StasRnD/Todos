import { configureStore, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../constants/constants';

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (todos, action) => [
      ...todos,
      { value: action.payload, id: Date.now() + Math.random() },
    ],
    removeTodo: (todos, action) =>
      todos.filter((todo) => todo.id !== action.payload),
    editTodo: (todos, action) =>
      todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      ),
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export const store = configureStore({
  reducer: todoSlice.reducer,
});
