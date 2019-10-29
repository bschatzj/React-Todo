import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import styled from 'styled-components'

const Main = styled.div`
display:flex;
justify-content: center;
flex-direction: column;
align-items:center;
background-color: orange;
margin:10px;
`



class App extends React.Component {

  constructor() {
    super(); 


    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    };
  }



  addTodo = task => {
    this.setState({ todos: [...this.state.todos, { id: Date.now(), 'task': task, completed: false }] });
  }


  toggleTodo = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.completed !== true)
    });
  }

  render() {
    return (
      <Main>
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
      <div className="todo-app">
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
      </div>
      </Main>
    );
  }
}

export default App