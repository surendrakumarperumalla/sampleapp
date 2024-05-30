import { createStore,applyMiddleware } from "redux";
import reducer from "./reducer";
import details from "./product.json"
import { thunk } from "redux-thunk";
console.log(details);
var store=createStore(reducer,applyMiddleware(thunk));

export default store;