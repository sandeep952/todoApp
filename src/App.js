import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 4,
      todos: [
        {
          id: 1,
          title: "Learn algos",
          completed: false,
        },
        {
          id: 2,
          title: "Create awesome websites",
          completed: true,
        },
        {
          id: 3,
          title: "Have fun coding",
          completed: false,
        },
      ],
    };
  }

  addTodo = (todoTitle) => {
    let todos = [...this.state.todos];
    let todo = {
      id: this.state.count + 1,
      title: todoTitle,
      completed: false,
    };

    todos.push(todo);
    this.setState({
      todos,
      count: this.state.count + 1,
    });
  };

  deleteTodo = (id) => {
    let todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({
      todos,
    });
  };

  toggleComplete = (id) => {
    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <div className="container">
        <Router>
            <Header />
              <Route exact path="/">
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  toggleComplete={this.toggleComplete}
                  deleteTodo={this.deleteTodo}
                />
              </Route>
              <Route exact path="/about" component={About} />
        </Router>
      </div>
    );
  }
}

export default App;
