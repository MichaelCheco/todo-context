import React, { Component } from 'react';
import logo from './logo.svg';
import Todos from "./components/Todos"
import Form from "./components/Form"
import TodoProvider from "./contexts/ToDoContext"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoProvider>
          <Todos />
          <Form />
        </TodoProvider>
      </div>
    );
  }
}

export default App;
