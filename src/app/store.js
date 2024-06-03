import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterslice'
import todoReducer from "../features/todolist/todoslice"
import counterslice from '../features/counter/counterslice'
import { countriesApi } from '../services/countries'

export const store = configureStore({
  reducer: {
    todoReducer,
    counterReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
})