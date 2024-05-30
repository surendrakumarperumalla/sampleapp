import React from "react";
import { connect } from "react-redux";
import { incrementcounter,decrementcounter,resetcounter } from "./actions";
function Counter(props){
    console.log(props);

    return<div className="border border-2 border-success m-2 p-2">
        <h1>counter:{props.count}</h1>
        <button className="btn btn-success m-2" onClick={()=>{props.inc()}}>increement</button>
        <button className="btn btn-danger m-2"  onClick={()=>{props.dec()}}>decreement</button>
        <button className="btn btn-warning m-2"  onClick={()=>{props.res()}}>reset</button>
      
    </div>
}
export default connect(function(state){
    return state.counterReducer
},
function(dispatch){
    return {
        inc:()=>{dispatch({type:'INCREMENT'})},
        
        dec:()=>{dispatch({type:'DECREMENT'})},
        
       res:()=>{dispatch({type:'RESET'})},
    }
}) 
 (Counter) 
 ///used for routing////
//  export default connect(function(state){
//     return state.counterReducer
// },
// function(dispatch){
//     return {
//         inc:()=>{dispatch({type:"INCREEMENT"})},
//         dec:()=>{dispatch({type:"DECREEMENT"})},
        
//         res:()=>{dispatch({type:"RESET"})},
//     }
// }) 
//  (Counter) 