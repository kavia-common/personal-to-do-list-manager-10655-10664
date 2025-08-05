import React from "react";
import styles from "./CompletedTasks.module.css";

/**
 * CompletedTasks displays the list of completed tasks with title, subtitle, and status bar.
 * UI strictly matches Figma layout and tokens.
 */
const CompletedTasks = () => {
  // Demo hardcoded data, as Figma design is static.
  const completed = [
    { title: "TODO TITLE", subtitle: "TODO SUB TITLE" },
    { title: "TODO TITLE", subtitle: "TODO SUB TITLE" },
    { title: "TODO TITLE", subtitle: "TODO SUB TITLE" },
  ];

  return (
    <div className={styles.screen}>
      {/* Status Bar */}
      <div className={styles.statusBar}>
        {/* Notch for light/dark mode simulation */}
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
        >
          &#8592;
        </button>
        <div className={styles.todoTitle}>
          <span className={styles.completedTitle}>Completed Task</span>
        </div>
      </div>

      {/* Completed Tasks */}
      <div className={styles.tasksWrapper}>
        {completed.map((c, i) => (
          <div className={styles.todoBar} key={i}>
            <div className={styles.titles}>
              <div className={styles.todoMainTitle}>{c.title}</div>
              <div className={styles.todoSubtitle}>{c.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedTasks;
