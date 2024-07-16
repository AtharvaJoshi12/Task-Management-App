import React, { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      console.log("Fetching tasks...");
      const response = await axios.get(
        "https://backend-lilac-eight-13.vercel.app/api/tasks"
      );
      console.log("Tasks fetched:", response.data);
      setTasks(response.data);
    } catch (error) {
      console.log("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container mt-5">
      <h1>Task Management App</h1>
      <TaskForm onUpdate={fetchTasks} />
      <TaskList tasks={tasks} onUpdate={fetchTasks} />
    </div>
  );
};

export default App;
