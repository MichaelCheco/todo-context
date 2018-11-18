import React from "react";
import { Context } from "../contexts/ToDoContext";

const Todos = () => {
  return (
    <Context.Consumer>
      {data => {
        return (
          <div>
            <h2>
             Todos {data.state.todos.map(todo => (
                <h4 onClick={() => data.actions.toggleComplete(todo)} style={{textDecoration: 'line-through'}}> {todo.task}</h4>
              ))}
            </h2>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default Todos;
