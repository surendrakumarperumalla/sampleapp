import React from "react";
import { connect } from "react-redux";
function Counter(props){
    console.log(props);

    return<div className="border border-2 border-success m-2 p-2">
        <h1>counter:{props.counterReducer.count}</h1>
        <button className="btn btn-success m-2" onClick={()=>{props.dispatch({type:"INCREEMENT"})}}>increement</button>
        <button className="btn btn-danger m-2"  onClick={()=>{props.dispatch({type:"DECREEMENT"})}}>decreement</button>
        <button className="btn btn-warning m-2"  onClick={()=>{props.dispatch({type:"RESET"})}}>reset</button>
    </div>
}
export default connect(function(store){return store})(Counter) 