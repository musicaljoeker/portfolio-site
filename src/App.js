import React, { Component } from "react";
import "./App.css";
import Body from "./components/Body/Body";
// import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
