import React from "react";

export default function Overview({ tasks }) {
  console.log(tasks)
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.step},
          {task.text}
        </li>
      ))}
    </ul>
  );
}
