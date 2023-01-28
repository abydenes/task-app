import React from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";
import "./App.css";

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
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitTask = this.onSubmitTask.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.finishEdit = this.finishEdit.bind(this);
  }

  handleChange(e) {
    this.setState({
      newTask: {
        text: e.target.value,
        id: this.state.newTask.id,
      },
    });
  }

  onSubmitTask(e) {
    e.preventDefault();
    if (this.state.tasks.some((x) => x.text === this.state.newTask.text)) {
      return;
    }
    this.setState({
      tasks: this.state.tasks.concat(this.state.newTask),
      newTask: {
        text: "",
        id: uniqid(),
      },
      editing: null,
    });
  }

  onClickEdit(index) {
    this.setState({ editing: index });
  }

  handleEdit(index, e) {
    e.preventDefault();
    const tasks = this.state.tasks;
    tasks[index].text = e.target.value;
    this.setState({ tasks });
  }

  finishEdit() {
    this.setState({ editing: null });
  }

  onClickDelete(value) {
    this.setState({
      tasks: this.state.tasks.filter((x) => x.text !== value),
    });
  }

  render() {
    return (
      <div className="main-container">
        <form onSubmit={this.onSubmitTask}>
          <label>
            <input
              type="text"
              value={this.state.newTask.text}
              onChange={this.handleChange}
              placeholder="enter task name"
              required
            />
          </label>
          <button>Submit Task</button>
        </form>
        <Overview
          tasks={this.state.tasks}
          handleDelete={this.onClickDelete}
          handleEdit={this.onClickEdit}
          editing={this.state.editing}
          handleEditChange={this.handleEdit}
          finishEdit={this.finishEdit}
        />
      </div>
    );
  }
}

export default App;
