import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import todoList from './todoList';

const middleware = [];

const reducer = combineReducers({ todoList });

const store = createStore(reducer, compose(applyMiddleware(...middleware)));

export default store;
