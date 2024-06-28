import React from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <TaskColumn title="To DO" icon="🎯" />
        <TaskColumn title="Doing" icon="✨" />
        <TaskColumn title="Done" icon="✅" />
      </main>
    </div>
  );
};

export default App;
