import { useState, useEffect } from "react";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
// The uuid library generates unique IDs
import { v4 as uuidv4 } from "uuid";
const App = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const localStoreTasks = JSON.parse(localStorage.getItem("Tasks"));
    if (localStoreTasks) setTasks([...localStoreTasks]);
  }, []);
  useEffect(() => {
    //storing the array in local storage
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deleteTaskById = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const editTaskById = (id, title) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) return { ...task, title };
      return task;
    });
    setTasks(updatedTasks);
  };

  const createTask = (title) => {
    const updatedTasks = [...tasks, { id: uuidv4(), title }];
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <TaskList tasks={tasks} onEdit={editTaskById} onDelete={deleteTaskById} />
      <TaskCreate onCreate={createTask} />
    </div>
  );
};

export default App;
