import React from "react";
import { withRouter } from "react-router";
import logo from '../../assets/images/rose.png'
import {connect} from 'react-redux'
import Color from "../HOC/Color";
import '../App.scss'
class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  }

  handlClickDelete = (user) =>{
    // console.log(user)
    this.props.deleteUserRedux(user)
  }
  handlClickAdd = () => {
    this.props.addUserRedux()
  }
  render() {
    // console.log (this.props.dataRedux)
    let listUser = this.props.dataRedux
    return(
      <>
        <div>Home pgae</div>
        <div>
          <img src = {logo} style={{height : '400px' , width :'800px'}}/>
        </div>
        <div>
          {listUser && listUser.length > 0 &&
            listUser.map((item,index) =>{
              return(
                <div key={item.id}>
                  {index + 1} - {item.name} &nbsp;
                  <span onClick={() => this.handlClickDelete(item)}>x</span>&nbsp;
                  
                </div>
              )
            })
          }
        </div>
        <button type="button" onClick={() => this.handlClickAdd()}>Add</button>
      </>
    )
  }
}
const mapStateToProps =(state) => {
  return {
    dataRedux : state.users
    // bien dataRedux dat ten tuy y
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    deleteUserRedux : (userDelete) => dispatch({type: 'DELETE_USER' , payload: userDelete}),
    addUserRedux : () => dispatch({type: 'ADD_USER'}),
  }
}

// export default withRouter(Home);
export default connect(mapStateToProps,mapDispatchToProps)(Color(Home))
