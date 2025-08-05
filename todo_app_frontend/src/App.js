// App container for the To-Do List App (Entry point)
import React, { useState, useEffect } from 'react';
import './App.css';
import AddTodo from './AddTodo';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <AddTodo />
    </div>
  );
}

export default App;
