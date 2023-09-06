import React, { useState } from 'react';

function TodoItem({ todo, editTodo, deleteTodo, markComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleEditSubmit = () => {
    editTodo(todo.id, editedTitle);
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      <input
        className="todo-checkbox"
        type="checkbox"
        checked={todo.completed}
        onChange={() => markComplete(todo.id)}
      />
      {isEditing ? (
        <>
          <input
            className="todo-input"
            type="text"
            value={editedTitle}
            onChange={handleEditChange}
          />
          <button className="todo-edit-button" onClick={handleEditSubmit}>
            Save
          </button>
        </>
      ) : (
        <>
          <span
            className="todo-title"
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.title}
          </span>
          <button className="todo-edit-button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button className="todo-delete-button" onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
