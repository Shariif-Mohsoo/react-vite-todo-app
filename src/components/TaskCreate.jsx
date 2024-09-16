import { useState } from "react";

const TaskCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (title) onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create" style={{ zIndex: 10 }}>
      <h3>Add A TASK</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Add</button>
      </form>
    </div>
  );
};

export default TaskCreate;
