import React, { Component } from 'react';
import './App.css';

const header = {
  lineHeight: 3,
  backgroundColor: '#E91E63',
  color: '#fff',
  textAlign: 'center'
}

const addButton = {
  backgroundColor: '#E91E63',
  width: 70,
  height: 70,
  borderRadius: 35,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 8,
  color: '#fff',
  fontSize: 24,
  borderWidth: 0,
  marginLeft: 5
}

class App extends Component {
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
        <h3 style={header}>- NOTER -</h3>
        <TodoList items={this.state.items} handleClick={this.handleClick} />
        <form onSubmit={this.handleSubmit}>
          <input
            id="new-todo"
            placeholder=">Escribir nota aquí"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button style={addButton}>
            +
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
