import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputForm from "./components/InputForm";

class App extends Component {
  state = {
    formString: ""
  };
  handleFormChange = newStringVal => {
    this.setState({ formString: newStringVal });
  };

  render() {
    return (
      <div className="App">
        {/* TODO: Input Form  */}
        <InputForm handleChange={this.handleFormChange} />
        {/* TODO: Display Todos */}
        {/* TOOD: Add Button */}
        {/* TOOD: Delete Button */}
        {/* TODO: Edit Button */}
      </div>
    );
  }
}

export default App;
