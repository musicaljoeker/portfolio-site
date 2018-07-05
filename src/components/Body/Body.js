import React, { Component } from "react";
import Nav from "./Nav/Nav";
import Content from "./Content/Content";
import "./Body.css";

class Body extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Nav />
        <Content />
      </div>
    );
  }
}

export default Body;
