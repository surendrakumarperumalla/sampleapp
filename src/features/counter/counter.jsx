import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {inc,dec,res} from "./counterslice"

function Counter() {
  var {count}=useSelector(state=>state.counterReducer)
  console.log(count)
  var dispatch=useDispatch();
  return (
    <div className='border border-info'>
    <h1>counter:{count}</h1>
   <button className='btn btn-success m-2' onClick={()=>{dispatch(inc())}}>increment</button>
   <button className='btn btn-success m-2' onClick={()=>{dispatch(dec())}}>decrement</button>
   <button className='btn btn-success m-2' onClick={()=>{dispatch(res())}}>reset</button>
    </div>
    
  )
}

export default Counter 