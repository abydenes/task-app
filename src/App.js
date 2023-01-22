import React from "react";
import Overview from "./components/Overview";

class App extends React.Component {
  constructor() {
    super();
    this.state = { tasks: ["aaa", "bbb"], newTask: "" };
    this.addTask = this.addTask.bind(this);
  }

  addTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.newTask),
      newTask: "",
    });
  }

  handleChange = (e) => {
    this.setState({ newTask: e.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.newTask}
              onChange={this.handleChange}
            />
          </label>
          <button onClick={this.addTask}>add task</button>
        </form>
        <Overview tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
