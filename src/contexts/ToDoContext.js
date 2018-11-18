import React from 'react';

export const Context = React.createContext({});

class TodoProvider extends React.Component {
    constructor() {
        super(
            this.state = {
                todos: [{task: 'Walk my dog', completed: false}],
                todo: ''
            }
        )
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    addTodo = e => {
        e.preventDefault();
        let todos = this.state.todos.slice();
        todos.push({task: this.state.todo, completed: false});
        this.setState({todos})
    }
    render() {
       return (
            <Context.Provider value={{
                state: this.state,
                actions: {handleChange: this.handleChange, addTodo: this.addTodo}
            }}>
                {this.props.children}
            </Context.Provider>
       )
    }
}

export default TodoProvider;