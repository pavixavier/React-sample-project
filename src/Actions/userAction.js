export function setName (newName){
    return{
        type: "SET_NAME",
        payload: newName
    }
}

export function setNumber (newNumber){
    return{
        type: "SET_NUMBER",
        payload: newNumber
    }
}