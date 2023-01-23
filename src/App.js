import React from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      newTask: {
        text: "",
        id: uniqid(),
        step: 0,
      },
    };
    this.onSubmitTask = this.onSubmitTask.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      newTask: {
        text: e.target.value,
        id: this.state.newTask.id,
        step: this.state.tasks.length,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.newTask),
      newTask: {
        text: "",
        id: uniqid(),
        step: this.state.tasks.length + 1,
      },
    });
  };

  onClickDelete = (e) => {
    const value = e.target.parentElement.parentElement.textContent;
    this.setState({
      tasks: this.state.tasks.filter((x) => x.text !== value),
    });
  };

  render() {
    return (
      <div>
        <form>
          <label>
            Task:
            <input
              type="text"
              value={this.state.newTask.text}
              onChange={this.handleChange}
            />
          </label>
          <button onClick={this.onSubmitTask}>Submit Task</button>
        </form>
        <Overview
          tasks={this.state.tasks}
          handleDelete={(e) => this.onClickDelete(e)}
        />
      </div>
    );
  }
}

export default App;
