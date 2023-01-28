import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function Overview({
  tasks,
  handleDelete,
  handleEdit,
  editing,
  handleEditChange,
  finishEdit
}) {
  return (
    <ul className="overview">
      {tasks.map((task, index) => (
        <li key={task.id}>
          {editing === index ? (
            <>
              <input
                type="text"
                value={task.text}
                onChange={(e) => handleEditChange(index, e)}
              />
              <button onClick={finishEdit}>Finish Editing</button>
            </>
          ) : (
            <span>
              <b>{index + 1}-</b>
              {task.text}
            </span>
          )}
          <div className="edit-and-delete">
            <FontAwesomeIcon icon={faEdit} onClick={() => handleEdit(index)} />
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => handleDelete(task.text)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
