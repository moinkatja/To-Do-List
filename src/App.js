import React, { Component } from 'react';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import { v4 as uuid } from 'uuid';


class App extends React.Component {

  state = {
    todoitems: [
      {
        id: uuid(),
        title: "CSS lernen",
        completed: true
      },
      {
        id: uuid(),
        title: "Brief schreiben",
        completed: false
      },
      {
        id: uuid(),
        title: "Obst kaufen",
        completed: false
      },
      {
        id: uuid(),
        title: "App erstellen",
        completed: false
      },
      {
        id: uuid(),
        title: "Staubsaugen",
        completed: false
      }
    ]

  };

  //Remove To-Do Item
  removeToDo = (id) => {
    this.setState({
      todoitems: [...this.state.todoitems.filter(todo =>
        todo.id !== id)]
    });
  }

  //Make the item lined-through when completed 
  toggleClass = (id) => {
    this.setState({
      todoitems: this.state.todoitems.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  //Add To-Do Item
  addToDo = (title) => {
    const newToDo = {
      id: uuid(),
      title: title,
      completed: false
    }
    this.setState({
      todoitems: [...this.state.todoitems, newToDo]
    });
  }


  render() {
    return (
      <div className="App">
        <AddToDo addToDo={this.addToDo} />
        <ToDoList todoitems={this.state.todoitems} toggleClass={this.toggleClass} removeToDo={this.removeToDo} />
      </div>
    );
  }
}

export default App;
