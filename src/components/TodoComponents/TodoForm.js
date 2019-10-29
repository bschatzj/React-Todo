import React from 'react'

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  handleChange = e => {
    this.setState({ input: e.target.value });
  }


  handleSubmit = e => {
    e.preventDefault();


      this.props.addTodo(this.state.input);
      this.setState({ input: '' });
  }

  render() {
    return (
      <>
        <form className="todo-form">
          <input type="text" name="todoInput" placeholder="New todo..." value={this.state.input} onChange={this.handleChange} />
          <button type="submit" onClick={this.handleSubmit}>Add Todo</button>
          <button onClick={e => { e.preventDefault(); this.props.clearCompleted() }}>Clear Completed</button>
        </form>
      </>
    )
  }
}

export default TodoForm; 