import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./containers/Landing/Landing";
import About from "./containers/About/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
        <About />
      </div>
    );
  }
}

export default App;
