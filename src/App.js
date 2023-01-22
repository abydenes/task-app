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
      },
    };
    this.onSubmitTask = this.onSubmitTask.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      newTask: {
        text: e.target.value,
        id: this.state.newTask.id,
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
      },
    });
  };

  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input
              type="text"
              value={this.state.newTask.text}
              onChange={this.handleChange}
            />
          </label>
          <button onClick={this.onSubmitTask}>Submit Task</button>
        </form>
        <Overview tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
