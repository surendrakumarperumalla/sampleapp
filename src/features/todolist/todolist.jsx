import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtodo } from './todoslice'

function Todolist() {

  var {todo}=useSelector(state=>state.todoReducer)
  // var [newtodo,setNewtodo]=useState();
  var dispatch=useDispatch();
  return (
    <div className="border border-success">
      <h1>TODOLIST</h1>
      <input type="text" id="d1"/>
      <button className="btn btn-warning" onClick={()=>{dispatch(addtodo(document.getElementById("d1").value))}}>ADDTODO</button>
      {
        todo?.map((t)=>{
          return<li>{t}</li>
        })
      }
 
    </div>
  )
}

export default Todolist