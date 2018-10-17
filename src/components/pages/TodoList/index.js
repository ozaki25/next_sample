import React from 'react';
import Title from '../../atoms/Title';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';
import TodoTable from '../../../containers/TodoTable';
import Container from '../../utils/Container';
import Margin from '../../utils/Margin';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  add = () => {
    const id = Date.now().toString();
    const content = this.input.current.value;
    const { addTodo } = this.props;
    addTodo({ id, content });
    this.input.current.value = '';
  };

  render() {
    return (
      <Container>
        <Title>TodoList</Title>
        <TextInput ref={this.input} />
        <Button onClick={this.add} wide>
          追加
        </Button>
        <Margin bottom="20" />
        <TodoTable />
      </Container>
    );
  }
}

export default TodoList;
