import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

const oldTask = localStorage.getItem("tasks");

const App = () => {

  const [tasks, setTasks] = useState(JSON.parse(oldTask) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])
  


  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  }

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn title="To DO" icon="🎯" tasks={tasks} status="todo" handleDelete={handleDelete} />
        <TaskColumn title="Doing" icon="✨" tasks={tasks} status="doing" handleDelete={handleDelete} />
        <TaskColumn title="Done" icon="✅" tasks={tasks} status="done" handleDelete={handleDelete} />
      </main>
    </div>
  );
};

export default App;
