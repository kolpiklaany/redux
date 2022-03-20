import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import { connect } from 'react-redux';
import { removeTodo,markcompleted } from '../storage/actions';

const TodoList = ({ todos = [], onRemovePressed,onMarkPress }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo, index) => (
      <TodoListItem
        key={index}
        todo={todo}
        onRemovePressed={onRemovePressed}
        onMarkPress={onMarkPress}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
  onMarkPress: text => dispatch(markcompleted(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
