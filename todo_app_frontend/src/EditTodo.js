import React, { useState } from "react";
import "./todo_design_system.css";

/**
 * PUBLIC_INTERFACE
 * EditTodo - A component for editing a Todo item.
 *
 * Renders the EDIT TODO form as styled in the design system and Figma.
 * - Provides fields for updating the todo title and detail
 * - "Update" and "Cancel" actions included
 * - Returns update/cancel action via callback props
 *
 * Props:
 *  - initialTitle: string (pre-populated value)
 *  - initialDetail: string (pre-populated value)
 *  - onUpdate: function({ title, detail }) => void
 *  - onCancel: function() => void
 */
function EditTodo({
  initialTitle = "",
  initialDetail = "",
  onUpdate,
  onCancel,
}) {
  const [title, setTitle] = useState(initialTitle);
  const [detail, setDetail] = useState(initialDetail);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onUpdate) {
      onUpdate({ title, detail });
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className="edit-todo-app">
      <header className="app-bar">
        <button
          className="back-btn"
          aria-label="Back"
          type="button"
          onClick={handleCancel}
        />
        <span className="app-bar-title">Edit Task</span>
      </header>
      <div className="status-bar" />
      <main className="edit-todo-content">
        <form className="edit-todo-form" autoComplete="off" onSubmit={handleSubmit}>
          <label className="input-label">
            <span className="field-title">Title</span>
            <input
              type="text"
              className="field-input"
              name="todo-title"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={64}
              required
            />
            <span className="field-underline"></span>
          </label>
          <label className="input-label">
            <span className="field-title">Detail</span>
            <input
              type="text"
              className="field-input"
              name="todo-detail"
              placeholder="Enter detail"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              maxLength={256}
            />
            <span className="field-underline"></span>
          </label>
          <div className="form-actions">
            <button type="submit" className="todo-btn update-btn">
              Update
            </button>
            <button type="button" className="todo-btn cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default EditTodo;
