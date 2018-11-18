import React from 'react';
import { Context } from "../contexts/ToDoContext";

const Form = () => {
    return (
        <Context.Consumer>
            {data => {
                return (
                    <div>
                        <input
                         type="text"
                         name="todo"
                         value={data.state.todo}
                         onChange={data.actions.handleChange}
                         placeholder="..add todo"
                          />
                          <button onClick={data.actions.addTodo}>Add</button>
                    </div>
                )
            }}
        </Context.Consumer>
    )
}

export default Form;
