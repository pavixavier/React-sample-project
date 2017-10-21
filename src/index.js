// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import App from './App';
import About from './Components/About'

import { Provider } from 'react-redux';

const initialState={
    result:1,
    lastValue:[]
}

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
const reducer = (state = initialState, action ) => {
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

const myLogger = (store) => (next) => (action) => {
    console.log("Logged action", action);
    next(action);
}
//const store = createStore( reducer);
const store = createStore(
                            combineReducers({reducer, userReducer})
                            , {}
                            , applyMiddleware(myLogger)
                        );


store.subscribe(() => {
    console.log("Store updated", store.getState());
})

// store.dispatch({
//     type: "ADD",
//     payload: 10
// })  

// store.dispatch({
//     type: "SET_NAME",
//     payload: "Aneeja Praveen"
// })

 ReactDOM.render(
     <Provider strore={store} >
        <App />
        <About />
     </Provider> , document.getElementById('root')
 );