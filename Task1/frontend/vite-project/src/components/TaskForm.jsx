import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskForm = ({ task, setTask, refreshTasks }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    if (task) {
      setFormData(task);
    }
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (task) {
        await axios.put(`http://localhost:3000/tasks/${task._id}`, formData);
      } else {
        await axios.post('http://localhost:3000/tasks', formData);
      }
      setTask(null);
      refreshTasks();
      setFormData({ title: '', description: '' });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Task Title"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Task Description"
      />
      <button type="submit">{task ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
