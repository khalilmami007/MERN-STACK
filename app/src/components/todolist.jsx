import React, { useState } from 'react';

const TodoList = () => {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([]);
  // State to manage the input value
  const [taskInput, setTaskInput] = useState('');

  // Function to handle input change
  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  // Function to handle task addition
  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  // Function to handle task completion
  const handleCompleteTask = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index] = {
        ...updatedTasks[index],
        completed: !updatedTasks[index].completed,
      };
      return updatedTasks;
    });
  };

  // Function to handle task removal
  const handleRemoveTask = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1);
      return updatedTasks;
    });
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input type="text" value={taskInput} onChange={handleInputChange} />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCompleteTask(index)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            {task.completed && <button onClick={() => handleRemoveTask(index)}>Delete</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
