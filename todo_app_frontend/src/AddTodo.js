import React, { useState } from "react";
import styles from "./AddTodo.module.css";

// PUBLIC_INTERFACE
/**
 * AddTodo component displays the design-matched Add Task UI.
 * Extensible to include item list, edit, delete, filter features in future.
 */
const AddTodo = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  // PUBLIC_INTERFACE
  function handleAddClick() {
    // In future, call the prop/callback, for now just clear and mock alert
    if (onAdd) onAdd({ title, detail });
    setTitle("");
    setDetail("");
    // Demo only; remove/replace for production logic
    // eslint-disable-next-line no-alert
    alert(
      `Task Added:\nTitle: ${title.trim() || "[no title]"}\nDetail: ${
        detail.trim() || "[no detail]"
      }`
    );
  }

  // PUBLIC_INTERFACE
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleAddClick();
    }
  }

  return (
    <div className={styles.screen}>
      {/* Status Bar */}
      <div className={styles.statusBar}>
        {/* Notch is visual only */}
        <div style={{ width: 0, height: 0 }} />
        <div className={styles.statusIcons}>
          <span style={{ fontSize: 14 }}>📶</span>
          <span style={{ fontSize: 14 }}>📡</span>
          <span style={{ fontSize: 14 }}>🔋</span>
        </div>
        <span className={styles.time}>9:41</span>
      </div>

      {/* AppBar */}
      <div className={styles.appBar}>
        <button
          className={styles.backButton}
          aria-label="Back"
          tabIndex={0}
          type="button"
          // In extensible design, handle routing or parent-callback
        >
          &#8592;
        </button>
        <div className={styles.todoTitle}>
          <span className={styles.addTaskTitle}>Add Task</span>
        </div>
      </div>

      {/* Title Field */}
      <div className={styles.inputGroup} style={{ marginTop: 163 }}>
        <label
          className={styles.inputLabel}
          htmlFor="todo-title-input"
        >
          Title
        </label>
        <input
          id="todo-title-input"
          className={styles.inputLine}
          type="text"
          placeholder="Enter Todo Title"
          maxLength={80}
          value={title}
          onChange={e => setTitle(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      {/* Detail Field */}
      <div className={styles.inputGroup} style={{ marginTop: 24 }}>
        <label
          className={styles.inputLabel}
          htmlFor="todo-detail-input"
        >
          Detail
        </label>
        <input
          id="todo-detail-input"
          className={styles.inputLine}
          type="text"
          placeholder="Enter Details"
          maxLength={200}
          value={detail}
          onChange={e => setDetail(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      {/* Add Button */}
      <button
        className={styles.addBtnBar}
        id="add-todo-btn"
        onClick={handleAddClick}
        tabIndex={0}
        type="button"
        aria-label="Add Task"
        disabled={!title.trim()}
        style={{
          opacity: title.trim() ? 1 : 0.7,
          cursor: title.trim() ? "pointer" : "not-allowed",
        }}
      >
        <span className={styles.addBtnLabel}>ADD</span>
      </button>
    </div>
  );
};

export default AddTodo;
