import React from "react";
import Todo from "./Todo/Todo";

const Todos = (props) => {
  
    return (
    <div >
      {props.todos.map((todo) => (
        <Todo
          title={todo.title}
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          toggleComplete={props.toggleComplete.bind(this, todo.id)}
          deleteTodo={props.deleteTodo.bind(this,todo.id)}/>
      ))}
    </div>
  );
};

export default Todos;
