import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/modules/createStore';
import TodoList from '../src/containers/TodoList';

export default () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);
