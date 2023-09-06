import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      addTodo({
        id: Date.now(),
        title: newTask,
        completed: false,
      });
      setNewTask('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={handleInputChange}
      />
      <button className="todo-add-button" type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
