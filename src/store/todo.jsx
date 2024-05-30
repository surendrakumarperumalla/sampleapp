import React from "react";
import { connect } from "react-redux";
import { Addtodo } from "./actions";
function Todos(props){
    console.log(props)
    return <div className="border border-2 border-info m-2 p-2">
        <h1>Todolist</h1>
        <input type="text" id="rt" placeholder="addtodo"/>
      <button className="btn btn-info"  onClick={()=>{props.Addtodo(document.getElementById("rt").value)}}>Addtodo</button>
       
          <ul>

            {
                props.todos.map((todo)=>{
                    return <li>{todo}</li>
                })
            }


          </ul>

    </div>
}
export default connect(function(state){
    return state.todoReducer
},
function(dispatch){
    return { Addtodo:(rt)=>{dispatch(Addtodo(rt))}
    
    }
})(Todos)
////used for routing///
// export default connect(function(state){
//     return state.todoReducer
// },
// function(dispatch){
//     return { Addtodo:(rt)=>{dispatch({type:"ADDTODO",payload:rt})}
    
//     }
// })(Todos)