import { connect } from 'react-redux';
import { removeTodo } from '../modules/todoList';
import TodoTable from '../components/organisms/TodoTable';

const mapStateToProps = state => state.todoList;

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoTable);
