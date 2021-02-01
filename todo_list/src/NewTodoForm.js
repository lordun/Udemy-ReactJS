import React, {Component} from 'react';
import { uuid } from 'uuidv4';

class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = { task: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
}
handleSubmit(evt) {
    evt.preventDefault();
    this.props.createTodo({...this.state, id: uuid(), completed: false});
    this.setState ({task: ""});
}
handleChange(evt) {
    this.setState ({
        [evt.target.name]: evt.target.value
    });
}
    render () {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo</label> <br />
                <input
                type = "text"
                placeholder = "New Todo"
                id = "task"
                name = "task"
                value = {this.state.task}
                onChange = {this.handleChange} 
                />
                <button>Add Todo</button>
            </form>
        )
    }
}

export  default NewTodoForm;
