import axios from "axios";

export function  addtocart(product){
    return{type:"ADDTOCART",payload:product}

}
export function incrementcounter(){
    return{type:"INCREMENT"}
}

export function decrementcounter(){
    return{type:"DECREMENT"}
}
export function resetcounter(){
    return{type:"RESET"}
}
export function Addtodo(newtodo){
    return{type:"ADDTODO",payload:newtodo}
}
export function getAllCountries(){
   return(dispatch)=>{
        axios.get("https://fakestoreapi.in/api/products")
        .then((res)=>{
            return dispatch({type:"LOADCOUNTRIES",payload:res.data})
        })
    
    }
}
    