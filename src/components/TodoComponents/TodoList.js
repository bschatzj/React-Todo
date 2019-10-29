import React from 'react';
import Todo from './Todo';



const TodoList = props => {
  return (
    <ul className="todo-list">
      {props.todos.map((todo, index) => (
        <Todo key={index} todo={todo} toggleTodo={props.toggleTodo} />
      ))}
    </ul>
  )
}

export default TodoList;