import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };
  handlChangeTodo = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handlClickAdd = () => {
    if (!this.state.title) {
      toast.error("Vui long nhap du lieu");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 100),
      title: this.state.title,
    };
    this.props.AddNewTodo(todo);
    this.setState({
      title: "",
    });
  };
  render() {
    return (
      <div className="todo-container">
        <div className="add-todo">
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handlChangeTodo(event)}
          />
          <button
            className="add"
            type="button"
            onClick={(event) => this.handlClickAdd(event)}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default AddTodo;
