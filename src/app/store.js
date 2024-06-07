import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterslice'
import todoReducer from "../features/todolist/todoslice"
import counterslice from '../features/counter/counterslice'
import { countriesApi } from '../services/countriesAPI'
import { productsApi } from '../services/productsAPI'
import { postsApi } from '../services/postsAPI'

export const store = configureStore({
  reducer: {
    todoReducer,
    counterReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [postsApi.reducerPath]:postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware,productsApi.middleware,postsApi.middleware),
})