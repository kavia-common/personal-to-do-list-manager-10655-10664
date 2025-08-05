import React, { useState, useEffect } from 'react';
import './App.css';
import EditTodo from "./EditTodo";
import "./todo_design_system.css";

function App() {
  // For demonstration, we'll show the EditTodo screen on first load.
  // In a real app, you'd use React Router or app state for navigation.
  const [showEdit, setShowEdit] = useState(true);
  const [todoState, setTodoState] = useState({
    title: "My Example Todo",
    detail: "This is a sample detail message.",
  });

  // PUBLIC_INTERFACE
  const onUpdate = (updated) => {
    setTodoState(updated);
    setShowEdit(false);
    alert("Todo updated!\n" + JSON.stringify(updated, null, 2));
  };
  // PUBLIC_INTERFACE
  const onCancel = () => {
    // Reset or navigate away
    alert("Edit canceled");
    setShowEdit(false);
  };

  return (
    <div className="App" style={{ minHeight: "100vh", background: "var(--app-bg)" }}>
      {showEdit ? (
        <EditTodo
          initialTitle={todoState.title}
          initialDetail={todoState.detail}
          onUpdate={onUpdate}
          onCancel={onCancel}
        />
      ) : (
        <div
          style={{
            paddingTop: "48px",
            maxWidth: 400,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2>Todo updated or canceled.</h2>
          <div style={{ margin: "20px 0" }}>
            <div>
              <span style={{ fontWeight: 500 }}>Title:</span>{" "}
              {todoState.title}
            </div>
            <div>
              <span style={{ fontWeight: 500 }}>Detail:</span>{" "}
              {todoState.detail}
            </div>
          </div>
          <button
            className="todo-btn update-btn"
            onClick={() => setShowEdit(true)}
            style={{ minWidth: 120 }}
          >
            Edit Again
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
