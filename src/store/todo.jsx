import React from "react";
import { connect } from "react-redux";
function Todos(props){
    console.log('props ::',props)
    return <div className="border border-2 border-info m-2 p-2">
        <h1>Todolist</h1>
        <input type="text" id="rt" placeholder="addtodo"/>
      <button className="btn btn-info"  onClick={()=>{props.dispatch({type:"ADDTODO",payload:document.getElementById("rt").value})}}>Addtodo</button>
       
          <ul>

            {
                props.todoReducer.todos.map((todo)=>{
                    return <li>{todo}</li>
                })
            }


          </ul>

    </div>
}
export default connect(store=>store)(Todos)