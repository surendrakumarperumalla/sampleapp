import details from "./product.json";
const initialstate={
    products:details.products,
    cart:[]
}
function productsReducer(state=initialstate,action){
    if(action.type==="ADDTOCART"){
        return{...state,cart:[...state.cart,action.payload]}
    }
    
    return state   
}
export default productsReducer