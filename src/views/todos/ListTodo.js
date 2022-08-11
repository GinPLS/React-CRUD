import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listtodo: [{ id: "todo1", title: "Doing homeword" }],
    edittodo: [],
  };

  AddNewTodo = (event) => {
    this.setState({
      listtodo: [...this.state.listtodo, event],
    });
    toast.success("Them thanh cong");
  };
  handlDelete = (todo) => {
    let currListtodo = this.state.listtodo;
    currListtodo = currListtodo.filter((item) => item.id !== todo.id);
    this.setState({
      listtodo: currListtodo,
    });
    toast.success("Xoa thanh cong");
  };

  handlEdit = (todo) => {
    let { listtodo, edittodo } = this.state;
    let isEmptyobj = Object.keys(edittodo).length === 0;
    //save
    if (isEmptyobj === false && edittodo.id === todo.id) {
      let listtodocopy = [...listtodo];
      let objIndex = listtodocopy.findIndex((item) => item.id === todo.id);
      listtodocopy[objIndex].title = edittodo.title;
      this.setState({
        listtodo: listtodocopy,
        edittodo: {},
      });
      toast.success("Update thanh cong");
      return;
    }

    // edit
    this.setState({
      edittodo: todo,
    });
  };

  handlEditTodo = (event) => {
    let editodocopy = { ...this.state.edittodo };
    editodocopy.title = event.target.value;
    this.setState({
      edittodo: editodocopy,
    });
  };
  render() {
    let { listtodo, edittodo } = this.state;
    let isEmptyobj = Object.keys(edittodo).length === 0;
    return (
      <>
        <p>ToDo</p>
        <AddTodo AddNewTodo={this.AddNewTodo} />
        <div className="todo-content">
          {listtodo &&
            listtodo.length > 0 &&
            listtodo.map((item, index) => {
              return (
                <div className="child-content" key={item.id}>
                  {isEmptyobj === true ? (
                    <span>
                      {index + 1}-{item.title}
                    </span>
                  ) : (
                    <>
                      {edittodo.id === item.id ? (
                        <span>
                          {index + 1} -{" "}
                          <input
                            value={edittodo.title}
                            onChange={(event) => this.handlEditTodo(event)}
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1}-{item.title}
                        </span>
                      )}
                    </>
                  )}
                  <button className="edit" onClick={() => this.handlEdit(item)}>
                    {isEmptyobj === false && edittodo.id === item.id
                      ? "Save"
                      : "Edit"}
                  </button>
                  <button
                    className="delete"
                    onClick={() => this.handlDelete(item)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}

export default ListTodo;
