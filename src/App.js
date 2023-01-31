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
  const [editing, setEditing] = useState(null);

  function handleChange(e) {
    setNewTask({
      text: e.target.value,
      id: uniqid(),
    });
  }

  function onSubmitTask(e) {
    e.preventDefault();
    if (tasks.some((x) => x.text === newTask.text)) {
      return;
    }
    setTasks(tasks.concat(newTask));
    setNewTask({
      text: "",
      id: uniqid(),
    });
  }

  function onClickEdit(index) {
    setEditing(index);
  }

  function handleEdit(index, e) {
    e.preventDefault();
    const tasksCopy = tasks.slice();
    tasksCopy[index].text = e.target.value;
    setTasks(tasksCopy);
  }

  function finishEdit() {
    setEditing(null);
  }

  function onClickDelete(value) {
    setTasks(tasks.filter((x) => x.text !== value));
  }

  return (
    <div className="main-container">
      <form onSubmit={onSubmitTask}>
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
      <Overview
        tasks={tasks}
        handleDelete={onClickDelete}
        handleEdit={onClickEdit}
        editing={editing}
        handleEditChange={handleEdit}
        finishEdit={finishEdit}
      />
    </div>
  );
}

export default App;
