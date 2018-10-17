import React from 'react';
import NoSSR from 'react-no-ssr';
import { Provider } from 'react-redux';
import store from '../src/modules/createStore';
import TodoList from '../src/containers/TodoList';

export default () => (
  <NoSSR>
    <Provider store={store}>
      <TodoList />
    </Provider>
  </NoSSR>
);
