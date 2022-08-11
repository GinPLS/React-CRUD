import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handlChangeJobTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handlChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handlClick = (event) => {
    event.preventDefault();
    // console.log(this.state);
    if (!this.state.title || !this.state.salary) {
      alert("Vui long nhap du lieu");
      return;
    }
    this.props.AddNewJob({
      id: Math.random(),
      title: this.state.title,
      salary: this.state.salary,
    });
    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      <form>
        <label htmlFor="fname">Job's Title</label>
        <br />
        <input
          value={this.state.title}
          type="text"
          onChange={(event) => this.handlChangeJobTitle(event)}
        />
        <br />
        <label htmlFor="lname">Salary</label>
        <br />
        <input
          value={this.state.salary}
          type="text"
          onChange={(event) => this.handlChangeSalary(event)}
        />
        <br />
        <input type="submit" onClick={(event) => this.handlClick(event)} />
      </form>
    );
  }
}

export default AddComponent;
