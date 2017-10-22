const initialState={
    result:1,
    lastValue:[]
}

const mathReducer = (state = initialState, action ) => {
    switch (action.type){
        case "ADD":
            //state.result += action.payload;
            state = {
                ...state,
                result: state.result + action.payload,
                lastValue : [...state.lastValue, action.payload]
            }
            break;
        case "SUBTRACT":            
            break;      
        default:
            break;
    }
    return state;
}

export default mathReducer;