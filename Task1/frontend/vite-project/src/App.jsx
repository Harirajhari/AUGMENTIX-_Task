import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm task={task} setTask={setTask} refreshTasks={fetchTasks} />
      <TaskList tasks={tasks} setTask={setTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
