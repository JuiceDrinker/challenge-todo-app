import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputForm from "./components/InputForm";
import API from "./lib/apiServices";
class App extends Component {
  state = {
    formString: "",
    tasks: []
  };

  handleFormChange = newStringVal => {
    this.setState({ formString: newStringVal });
  };

  displayTasks = () => {
    API.getAllTasks()
      .then(result => {
        const taskTitles = result.data.map(x => x);
        this.setState({ tasks: taskTitles });
      })
      .catch(err => {
        console.log("err :", err);
      });
  };
  componentDidMount = () => {
    this.displayTasks();
  };

  handleAdd = () => {
    API.createTask(this.state.formString)
      .then(result => {
        this.setState({ formString: "" });
        this.displayTasks();
        console.log("result :", result);
      })
      .catch(err => {
        console.log("err :", err);
      });
  };

  render() {
    return (
      <div className="App">
        {/* TODO: Input Form  */}
        <InputForm handleChange={this.handleFormChange} />
        {/* TOOD: Add Button */}
        <button onClick={this.handleAdd}>Add Task</button>
        {/* TODO: Display Todos */}
        {this.state.tasks.map(x => (
          <h1 key={x.id}> {x.title} </h1> //Unique key but console showing warning for non-unique key?
        ))}
        {/* TOOD: Delete Button */}
        {/* TODO: Edit Button */}
      </div>
    );
  }
}

export default App;
