import React, { useState } from "react";
import axios from "axios";
import "./TaskList.css";

const TaskList = ({ tasks, onUpdate }) => {
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortOption, setSortOption] = useState("title");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = async (taskId) => {
    setLoading(true);
    setError("");
    try {
      await axios.delete(`http://localhost:8000/api/tasks/${taskId}`);
      onUpdate();
    } catch (error) {
      console.error("Error deleting task:", error);
      setError("Failed to delete task. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (taskId, newStatus) => {
    setLoading(true);
    setError("");
    try {
      await axios.put(`http://localhost:8000/api/tasks/${taskId}`, {
        status: newStatus,
      });
      onUpdate();
    } catch (error) {
      console.error("Error updating task:", error);
      setError("Failed to update task. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const filteredTasks = tasks.filter((task) =>
    filterStatus === "all" ? true : task.status === filterStatus
  );

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sortOption === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortOption === "created_at") {
      return new Date(a.created_at) - new Date(b.created_at);
    } else {
      return 0;
    }
  });

  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between mb-3">
        <div>
          <label htmlFor="filterStatus" className="me-2">
            Filter by status:
          </label>
          <select
            id="filterStatus"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="form-select d-inline-block w-auto"
          >
            <option value="all">All</option>
            <option value="todo">Todo</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div>
          <label htmlFor="sortOption" className="me-2">
            Sort by:
          </label>
          <select
            id="sortOption"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="form-select d-inline-block w-auto"
          >
            <option value="title">Title</option>
            <option value="created_at">Created Date</option>
          </select>
        </div>
      </div>
      {loading && <div className="alert alert-info">Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        {sortedTasks.map((task) => (
          <div key={task.id} className="col-md-4 mb-3">
            <div className="card">
              <div className={`status-circle ${task.status}`}></div>
              <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <p className="card-text">{task.description}</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <select
                    value={task.status}
                    onChange={(e) =>
                      handleStatusChange(task.id, e.target.value)
                    }
                    className="form-select"
                    style={{ width: "50%" }}
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
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
