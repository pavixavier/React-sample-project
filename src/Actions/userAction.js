// export function setName (name){
//     return{
//         type: "SET_NAME",
//         payload: name
//     };
// }

// export function setName (name){
//     return dispatch => {
//         setTimeout(function() {
//             dispatch ({
//                 type:   "SET_NAME",
//                 payload:name
//             })
//         }, 2000);
//     }
// }

export function setName (name){
    return{
        type: "SET_NAME",
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(name);
            })
        })
    }
}

export function setNumber (newNumber){
    return{
        type: "SET_NUMBER",
        payload: newNumber
    };
}