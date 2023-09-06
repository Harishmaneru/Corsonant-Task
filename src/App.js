import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import FilterButtons from './FilterButtons';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  console.log(todos);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);
 
  // Function to add a new task
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // Function to edit a task
  const editTodo = (id, updatedTitle) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: updatedTitle } : todo
    );
    setTodos(updatedTodos);
  };

  // Function to delete a task
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Function to mark a task as complete
  const markComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const filteredTodos =
    filter === 'all'
      ? todos
      : filter === 'completed'
      ? todos.filter((todo) => todo.completed)
      : todos.filter((todo) => !todo.completed);

  return (
    <div className="todo-app">
      <h1>Corsonant Assignment - Todo App:</h1>
      <TodoForm addTodo={addTodo} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        markComplete={markComplete}
      />
    </div>
  );
}

export default TodoApp;
