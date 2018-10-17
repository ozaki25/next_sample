import { connect } from 'react-redux';
import { addTodo } from '../modules/todoList';
import TodoList from '../components/pages/TodoList';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
