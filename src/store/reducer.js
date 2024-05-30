import { combineReducers } from "redux";
import todoReducer from "./todo.reducer";
import counterReducer from "./counter.reducer";
import productsReducer from "./products.reducer";
import countriesReducer from "./countriesreducer";

const reducer= combineReducers({todoReducer,counterReducer,productsReducer,countriesReducer})
    

export default reducer