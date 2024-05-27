const initialState = {

    todos: ["surendra", "kumar", "roy", "joy"]

}

function todoReducer(state = initialState, action) {

    if (action.type === "ADDTODO") {
        return {...state,todos:[...state.todos,action.payload] }
    }

    return state
}
export default todoReducer