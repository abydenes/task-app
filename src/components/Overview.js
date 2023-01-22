import React from "react";

export default function Overview({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
  );
}
