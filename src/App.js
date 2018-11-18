import React, { Component } from 'react';
import Todos from "./components/Todos"
import Form from "./components/Form"
import TodoProvider from "./contexts/ToDoContext"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
              
        <TodoProvider>
        <div className="components">
          <Todos />
          <Form />
          </div>
        </TodoProvider>
      </div>
    );
  }
}

export default App;
