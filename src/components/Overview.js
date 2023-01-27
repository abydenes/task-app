import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Overview({ tasks, handleDelete }) {
  return (
    <ul className="overview">
      {tasks.map((task, index) => (
        <li key={task.id}>
          <span>
            <b>{index + 1}-</b>
            {task.text}
          </span>
          <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
        </li>
      ))}
    </ul>
  );
}
