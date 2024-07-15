import React from "react";
import axios from "axios";

const TaskList = ({ tasks, onUpdate }) => {
  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`http://localhost:8000/api/tasks/${taskId}`);
      onUpdate(); // Refresh task list
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
  const handleStatusChange = async (taskId, newStatus) => {
    try {
      console.log("Updating task:", { status: newStatus }); // Log the payload
      await axios.put(`http://localhost:8000/api/tasks/${taskId}`, {
        status: newStatus,
      });
      onUpdate(); // Refresh task list
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="mt-4">
      <h2>Task List</h2>
      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item">
            <h5>{task.title}</h5>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <select
              value={task.status}
              onChange={(e) => handleStatusChange(task.id, e.target.value)}
              className="form-select"
            >
              <option value="todo">Todo</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
            </select>
            <button
              className="btn btn-danger mt-2"
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
