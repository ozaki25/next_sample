import React from 'react';
import Button from '../../atoms/Button';
import Table from '../../molecules/Table';

const TodoTable = ({ todoList, removeTodo }) => (
  <Table
    body={todoList.map(todo => [
      todo.content,
      <Button onClick={() => (window.confirm('削除しますか？') ? removeTodo(todo.id) : null)}>
        削除
      </Button>,
    ])}
  />
);

export default TodoTable;
