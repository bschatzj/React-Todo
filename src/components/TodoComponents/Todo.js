import React from 'react';
import styled from 'styled-components'

const List = styled.li`
color: blue;
`

const Todo = props => {
  return (
    <List style={props.todo.completed ? { textDecoration: 'line-through'} : {}} onClick={() => props.toggleTodo(props.todo.id)}>
      {props.todo.task}
    </List>
  )
}

export default Todo;