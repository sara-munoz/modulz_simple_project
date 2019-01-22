import foodReducer from './../reducers/reducer';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";


var store;
export default store = createStore(foodReducer,composeWithDevTools(applyMiddleware(thunkMiddleware)));
