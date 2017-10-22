//const store = createStore( reducer);
// const store = createStore(
//                             combineReducers({math: mathReducer, user: userReducer})
//                             , {}
//                             , applyMiddleware(myLogger)
//                         );

import { createStore, combineReducers, applyMiddleware } from 'redux';
import math from '../Reducers/mathReducer';
import user from '../Reducers/userReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

export default createStore(
                            combineReducers({ math, user })
                            , {}
                            , applyMiddleware(thunk, promise())
                        );