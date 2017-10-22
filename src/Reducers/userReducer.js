const profile={
    name: "Praveen Xavier",
    contact: 7736557476
}

const userReducer =(state = profile, action) => {

    switch(action.type){
        case "SET_NAME_FULFILLED":
            state={
                ...state,
                name: action.payload
            }
            break;
        default:
            break;
    }
    return state;
}
export default userReducer;