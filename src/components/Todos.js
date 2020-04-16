import React from "react";
import Todo from "./Todo/Todo";

const Todos = (props) => {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        {props.todos.map((todo) => (
          <Todo
            title={todo.title}
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            toggleComplete={props.toggleComplete.bind(this, todo.id)}
            deleteTodo={props.deleteTodo.bind(this, todo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
