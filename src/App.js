import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} handleClick={this.handleClick} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            Agregar Item:
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Agregar #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }

  handleClick(idx) {
   const remainder = this.state.items.filter((todo) => {
     if(todo.id !== idx) return todo;
   });
   this.setState({items: remainder});
  }
}

class TodoList extends React.Component {

  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text} <button id="delete-item" onClick={() => {this.props.handleClick(item.id)}}>Eliminar</button></li>
        ))}
      </ul>
    );
  }
}

export default App;
