import { useState } from "react";
import TaskEdit from "./TaskEdit";
const TaskShow = ({ task, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    //give an id of the current task.
    onDelete(task.id);
  };
  const handleEditClick = () => {
    //give an id  || title of the current task.
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, newTitle) => {
    onEdit(id, newTitle);
    setShowEdit(false);
  };

  let content = showEdit ? (
    <TaskEdit onSubmit={handleSubmit} task={task} />
  ) : (
    <h3>{task.title}</h3>
  );
  return (
    <div className="book-show">
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}></button>
        <button className="delete" onClick={handleDeleteClick}></button>
      </div>
    </div>
  );
};

export default TaskShow;
