import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function Overview({ tasks, handleDelete, handleEdit }) {
  return (
    <ul className="overview">
      {tasks.map((task, index) => (
        <li key={task.id}>
          <span>
            <b>{index + 1}-</b>
            {task.text}
          </span>
          <div className="edit-and-delete">
            <FontAwesomeIcon
              icon={faEdit}
              onClick={() => handleEdit(task.text)}
            />
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </li>
      ))}
    </ul>
  );
}
