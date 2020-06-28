import React, { Component } from 'react'
import PropTypes from "prop-types";
import classes from './ToDoItem.module.css';


export class ToDoItem extends Component {
    getStyle = () => {
        if (this.props.todo.completed) {
            return {
                textDecoration: "line-through",
                color: "LightSeaGreen"
            }
        }
        else {
            return {
                textDecoration: "none"
            }
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <li>
                <span className={classes.Trash} onClick={this.props.removeToDo.bind(this, id)}>
                    <i className="fa fa-trash"></i>
                </span>
                <span style={this.getStyle()} onClick={this.props.toggleClass.bind(this, id)}>{title}</span>
            </li>
        )
    }
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default ToDoItem;
