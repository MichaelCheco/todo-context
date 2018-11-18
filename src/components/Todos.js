import React from "react";
import { Context } from "../contexts/ToDoContext";

const Todos = () => {
  return (
    <Context.Consumer>
      {data => {
        return (
          <div>
            <h2>
              {data.state.todos.map(todo => (
                <h2>{todo.task}</h2>
              ))}
            </h2>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default Todos;
