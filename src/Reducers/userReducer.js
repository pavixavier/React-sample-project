const profile={
    name: "Praveen Xavier",
    contact: 7736557476
}

const userReducer =(state = profile, action) => {

    switch(action.type){
        case "SET_NAME":
            state={
                ...state,
                name: action.payload
            }
            break;
        // case "SET_NUMBER":
        //     break;
        default:
            break;
    }
    return state;
}
export default userReducer;