import { useState } from "react";

const TaskEdit = ({ task, onSubmit }) => {
  const [title, setTitle] = useState(task.title);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(task.id, title);
  };
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        value={title}
        className="input"
        onChange={handleChange}
        autoFocus
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default TaskEdit;
