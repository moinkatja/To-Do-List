import React, { Component } from 'react';
import ToDoItem from "./ToDoItem";
import PropTypes from "prop-types";

class ToDoList extends Component {

    render() {
        return this.props.todoitems.map((todo) => (
            <ul>
                <ToDoItem
                    key={todo.id}
                    todo={todo}
                    toggleClass={this.props.toggleClass}
                    removeToDo={this.props.removeToDo}
                />
            </ul>
        ))
    }
};

ToDoList.propTypes = {
    todoitems: PropTypes.array.isRequired
}

export default ToDoList;
