import React from "react";

const Todo = (props) => {
  return (
    <div className="card my-3 p-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id={props.id}
          />
          <label className="custom-control-label" htmlFor={props.id}>
          {props.title}
          </label>
        </div>
    </div>
  );
};

export default Todo;
