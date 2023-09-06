import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, editTodo, deleteTodo, markComplete }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          markComplete={markComplete}
         
          itemClassName="todo-item"
          checkboxClassName="todo-checkbox"
          titleClassName="todo-title"
          editButtonClassName="todo-edit-button"
          deleteButtonClassName="todo-delete-button"
        />
      ))}
    </ul>
  );
}

export default TodoList;
