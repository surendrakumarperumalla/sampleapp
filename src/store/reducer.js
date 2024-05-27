import { combineReducers } from "redux";
import todoReducer from "./todo.reducer";
import counterReducer from "./counter.reducer";
import productsReducer from "./products.reducer";

const reducer= combineReducers({todoReducer,counterReducer,productsReducer})
    

export default reducer