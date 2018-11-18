import React from 'react';
import { Context } from "../contexts/ToDoContext";
import styled from "styled-components";

const Button = styled.button`
    width: 150px;
    height: 40px;
    border-radius: 7px;
    color: white;
    cursor: pointer;
    font-size: 17px;
    background-color: lightblue;
    &:hover {
        color: lightblue;
        background-color: white;
        border: 2px solid darkgrey;
    }
`
const Input = styled.input`
    height: 30px;
    width: 35%;
    font-size: 18px;
    margin-right: 15px;
    margin-left: 4px;
    

`

const Form = () => {
    return (
        <Context.Consumer>
            {data => {
                return (
                    <div>
                        <Input
                         type="text"
                         name="todo"
                         value={data.state.todo}
                         onChange={data.actions.handleChange}
                         placeholder="..add todo"
                          />
                          <Button onClick={data.actions.addTodo}>Add</Button>
                    </div>
                )
            }}
        </Context.Consumer>
    )
}

export default Form;
