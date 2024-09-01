import React from 'react';

const TaskItem = ({ task, setTask, deleteTask }) => {
    console.log( task, setTask, deleteTask );
    
  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => setTask(task)}>Edit</button>
      <button onClick={() => deleteTask(task._id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
