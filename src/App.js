import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./containers/Landing/Landing";
import About from "./containers/About/About";
import Purpose from "./containers/Purpose/Purpose";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
        <About />
        <Purpose />
      </div>
    );
  }
}

export default App;
