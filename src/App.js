import React, { useState } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    text: "",
    id: uniqid(),
  });

  function handleChange(e) {
    setNewTask({
      text: e.target.value,
    });
  }

  // function onSubmitTask(e) {
  //   e.preventDefault();
  //   if (this.state.tasks.some((x) => x.text === this.state.newTask.text)) {
  //     return;
  //   }
  //   this.setState({
  //     tasks: this.state.tasks.concat(this.state.newTask),
  //     newTask: {
  //       text: "",
  //       id: uniqid(),
  //     },
  //     editing: null,
  //   });
  // }

  // function onClickEdit(index) {
  //   this.setState({ editing: index });
  // }

  // function handleEdit(index, e) {
  //   e.preventDefault();
  //   const tasks = this.state.tasks;
  //   tasks[index].text = e.target.value;
  //   this.setState({ tasks });
  // }

  // function finishEdit() {
  //   this.setState({ editing: null });
  // }

  // function onClickDelete(value) {
  //   this.setState({
  //     tasks: this.state.tasks.filter((x) => x.text !== value),
  //   });
  // }

  return (
    <div className="main-container">
      <form >
        <label>
          <input
            type="text"
            value={newTask.text}
            onChange={handleChange}
            placeholder="enter task name"
            required
          />
        </label>
        <button>Submit Task</button>
      </form>
      {/* <Overview
        tasks={this.state.tasks}
        handleDelete={this.onClickDelete}
        handleEdit={this.onClickEdit}
        editing={this.state.editing}
        handleEditChange={this.handleEdit}
        finishEdit={this.finishEdit}
      /> */}
    </div>
  );
}

export default App;
