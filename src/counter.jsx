import React, { useState } from "react";
function Counter(){
    function inc(){
        setCounter(counter+1)
    }
    function dec(){
        setCounter(counter-1)
    }
    function res(){
        setCounter(counter=0)
    }
    var[counter,setCounter]=React.useState(0)
    return<div>
 <h1>counter:{counter}</h1>
 <button onClick={()=>{inc()}}>increement</button>
 <button onClick={()=>{dec()}}>decreement</button>
 <button onClick={()=>{res()}}>reset</button>

    </div>
}
export default Counter