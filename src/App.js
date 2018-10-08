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
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  render() {
    return (
      <div>
        <h3 style={header}>- NOTER -</h3>
        
          <ul>
            {this.state.items.map(item => (
              <li key={item.id}>{item.text} <button id="delete-item" onClick={() => {this.deleteNote(item.id)}}>Eliminar</button></li>
            ))}
          </ul>

          <input
            id="new-todo"
            placeholder=">Escribir nota aquí"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button style={addButton} onClick={this.addNote} >
            +
          </button>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  addNote(e) {
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

  deleteNote(key) {
   const remainder = this.state.items.filter((todo) => {
     if(todo.id !== key) return todo;
   });
   this.setState({items: remainder});
  }
}

export default App;
