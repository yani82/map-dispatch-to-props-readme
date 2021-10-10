import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addTodo } from './actions/todos';

class App extends Component {

  state = {
    todo: ''
  }

  handleOnChange = event => {
    this.setState({
      todo: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log("Todo being added: ", this.state.todo);
    this.props.dispatch(addTodo(this.state.todo));
    this.setState({ todo: '' });
  }

  addTodo = () => {
    return ({
      type: 'ADD_TODO',
      todo: this.state.todo 
    })
  }

  render() {
    debugger; 
    const renderTodos = () => this.props.todos.map(todo => <li key={todo}>{todo}</li>);
    return (
      <div className="App">
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input
          type="text"
          onChange={(event) => this.handleOnChange(event)}
          id="todos"
          placeholder="add todo" 
          value={this.state.todo}/>
        <input type="submit" />
      </form>
      <h2>Todos:</h2>
        <ol>{renderTodos()}</ol>
      </div>
    );
  }
};

const mapStateToProps = dispatch => {
  return {
    addTodo: (todo) => {
      dispatch(addTodo(todo))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);