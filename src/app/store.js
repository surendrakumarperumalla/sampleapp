import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterslice'
import todoReducer from "../features/todolist/todoslice"
import counterslice from '../features/counter/counterslice'
import { countriesApi } from '../services/countries'
import { productsApi } from '../services/products'

export const store = configureStore({
  reducer: {
    todoReducer,
    counterReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware,productsApi.middleware),
})