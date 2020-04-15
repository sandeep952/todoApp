import React from "react";

const Todo = (props) => {
  return (
    <div className="card my-3">
      <div className="card-body">
          <input type="checkbox"  />
          <span className="px-2">{props.title}</span>
      </div>
    </div>
  );
};

export default Todo;
