import React, { Component } from "react";
import "./App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Overlay from "./components/Overlay/Overlay";
import MenuSidebar from "./components/MenuSidebar/MenuSidebar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlayVisible: false
    };
    this.overlayToggle = this.overlayToggle.bind(this);
  }

  overlayToggle() {
    console.log(this.state.overlayVisible);
    if (this.state.overlayVisible) {
      this.setState({ overlayVisible: false });
    } else {
      console.log("got a false");
      this.setState({ overlayVisible: true });
    }
  }

  render() {
    return (
      <div className="App">
        <Body overlayToggle={this.overlayToggle} />
        <Footer />
        <Overlay show={this.state.overlayVisible} />
        <MenuSidebar overlayToggle={this.overlayToggle} />
      </div>
    );
  }
}

export default App;
