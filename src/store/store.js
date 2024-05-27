import { createStore } from "redux";
import reducer from "./reducer";
import details from "./product.json"
console.log(details);
var store=createStore(reducer);

export default store;