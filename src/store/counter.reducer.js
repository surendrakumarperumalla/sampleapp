const initialState={
    count:0,
}

function counterReducer(state=initialState,action){
    if(action.type==="INCREMENT"){
        return{...state,count:state.count+1}
    }
    if(action.type==="DECREMENT"){
        return{...state,count:state.count-1}
    }
    if(action.type==="RESET"){
        return{...state,count:0}
    }
   

    return state
}
export default counterReducer