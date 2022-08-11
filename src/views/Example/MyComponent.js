import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "job1", title: "Developer", salary: "1000" },
      { id: "job2", title: "Tester", salary: "700" },
      { id: "job3", title: "Manager", salary: "1000" },
    ],
  };
  AddNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };
  DeleteJob = (job) => {
    let currentJob = this.state.arrJobs;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJob,
    });
  };

  render() {
    return (
      <>
        <AddComponent AddNewJob={this.AddNewJob} />
        <br />
        <ChildComponent
          arrJobs={this.state.arrJobs}
          DeleteJob={this.DeleteJob}
        />
      </>
    );
  }
  s;
}

export default MyComponent;
