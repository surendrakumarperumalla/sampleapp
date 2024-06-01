import { createSlice } from '@reduxjs/toolkit'
const initialState={
    todo:[
        "kaina june",
        "sophia floersche",
        "hime rider"
    ]
}
 var todoslice=createSlice({
    name:"todolist",
    initialState,
    reducers:{
        addtodo:(state,action)=>{
            state.todo.push(action.payload)

        }
    }
 })
 export const{addtodo}=todoslice.actions;
 export default todoslice.reducer;