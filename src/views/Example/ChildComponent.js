import React from "react";

class ChildComponent extends React.Component {
  state = {
    showjob: false,
  };
  handleShowHide = () => {
    this.setState({
      showjob: !this.state.showjob,
    });
  };
  handleOnclickDelete = (job) => {
    this.props.DeleteJob(job);
  };
  render() {
    let { arrJobs } = this.props;
    let { showjob } = this.state;
    return (
      <>
        {showjob === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="jobs-list">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}
                    <> </>
                    <span onClick={() => this.handleOnclickDelete(item)}>
                      x
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

// const ChildComponent = (props) => {
//   let {arrJobs} = props;
//   return (
//     <>
//       <div className="job-list">
//         {arrJobs.map((item, index) => {
//           return (
//             <div key={item.id}>
//               {item.title} - {item.salary}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

export default ChildComponent;
