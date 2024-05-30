const initialState={
    countries:[]
}
 const countriesReducer=(state=initialState,action)=>{
    if(action.type=="LOADCOUNTRIES"){
    return{...state,countries:action.payload}
}
return state
}
export default countriesReducer
