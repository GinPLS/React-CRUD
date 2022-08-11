import React from "react";
import "./Nav.scss";
import { NavLink, Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="top-nav">
        <NavLink activeClassName='active' to="/" exact={true}>
          Home
        </NavLink>
        <NavLink activeClassName='active' to="/todo">
          Todo
        </NavLink>
        <NavLink activeClassName='active' to="/job">
          Job
        </NavLink>
        <NavLink activeClassName='active' to="/user">
          User
        </NavLink>
      </div>
    );
  }
}

export default Nav;
