import React, { Component } from "react";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      todo: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      todo: event.target.value,
    });
  };

  onSubmit =  (event)=>{
    event.preventDefault();
    this.props.addTodo(this.state.todo)
    this.setState({
      todo:""
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form text-center">
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your todo here"
                value={this.state.todo}
                onChange={this.handleChange}
              />

              <button type="submit" className="btn btn-primary m-2">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTodo;
