import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterslice'
import todoReducer from "../features/todolist/todoslice"

export const store = configureStore({
  reducer: {todoReducer,counterReducer},
})
