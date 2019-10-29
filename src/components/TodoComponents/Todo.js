import React from 'react';

const Todo = props => {
  return (
    <li className="todo-item" style={props.todo.completed ? { textDecoration: 'line-through'} : {}} onClick={() => props.toggleTodo(props.todo.id)}>
      {props.todo.task}
    </li>
  )
}

export default Todo;