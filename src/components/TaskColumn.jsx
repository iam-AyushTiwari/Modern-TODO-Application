import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        {icon}
        {title}
      </h2>
      <TaskCard />
    </section>
  );
};

export default TaskColumn;
