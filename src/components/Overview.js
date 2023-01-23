import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Overview({ tasks, handleDelete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.step}
          <span>
            {task.text}
            <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
          </span>
        </li>
      ))}
    </ul>
  );
}
