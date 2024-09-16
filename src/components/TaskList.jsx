// import React from "react";
import TaskShow from "./TaskShow";

const TaskList = ({ tasks, onDelete, onEdit }) => {
  const renderTasks = tasks.map((task) => {
    return (
      <TaskShow key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
    );
  });

  return <div className="book-list">{renderTasks}</div>;
};

export default TaskList;
