import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, setTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} setTask={setTask} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

export default TaskList;
