import React from "react";
import "./Todo.css";
const Todo = (props) => {
  return (
    <div  
    className="todo-card card my-3 p-3">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id={props.id}
          onChange={props.toggleComplete}
          checked={props.completed}
        />

        <label
          className="custom-control-label"
          style={{ textDecoration: props.completed ? "line-through" : "none" }}
          htmlFor={props.id}>
          {props.title}
        </label>

        <button className="btn btn-danger float-right"
        onClick={props.deleteTodo}>
        Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
