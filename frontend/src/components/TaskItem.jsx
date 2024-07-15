import React from "react";
import axios from "axios";

const TaskItem = ({ task, onUpdate }) => {
  const handleDelete = async () => {
    await axios.delete(`/api/tasks/${task.id}`);
    onUpdate();
  };

  const handleStatusChange = async (newStatus) => {
    await axios.put(`/api/tasks/${task.id}`, { ...task, status: newStatus });
    onUpdate();
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <h5>{task.title}</h5>
        <p>{task.description}</p>
        <span
          className={`badge bg-${
            task.status === "done"
              ? "success"
              : task.status === "in_progress"
              ? "warning"
              : "secondary"
          }`}
        >
          {task.status}
        </span>
      </div>
      <div>
        <button
          className="btn btn-success me-2"
          onClick={() => handleStatusChange("done")}
        >
          Done
        </button>
        <button
          className="btn btn-warning me-2"
          onClick={() => handleStatusChange("in_progress")}
        >
          In Progress
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
