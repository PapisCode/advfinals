// components/TodoList.jsx
import React, { useState } from 'react';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleRemove = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Todo List</h2>
      <div style={styles.inputRow}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.addButton}>Add</button>
      </div>

      {tasks.length === 0 ? (
        <p style={styles.empty}>No tasks yet!</p>
      ) : (
        <ul style={styles.list}>
          {tasks.map((item, index) => (
            <li key={index} style={styles.listItem}>
              <span>{item}</span>
              <button onClick={() => handleRemove(index)} style={styles.removeButton}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    background: '#1e1e1e',
    padding: '2rem',
    marginTop: '2rem',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '400px',
    color: '#fff',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  heading: {
    marginBottom: '1rem',
    fontSize: '1.5rem',
    color: '#f1f1f1',
  },
  inputRow: {
    display: 'flex',
    gap: '10px',
    marginBottom: '1rem',
  },
  input: {
    flex: 1,
    padding: '0.6rem',
    borderRadius: '8px',
    border: '1px solid #444',
    background: '#2e2e2e',
    color: '#eee',
    fontSize: '1rem',
  },
  addButton: {
    padding: '0.6rem 1.2rem',
    background: '#4CAF50',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '0.95rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  empty: {
    color: '#aaa',
    fontStyle: 'italic',
    marginTop: '1rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    marginTop: '1rem',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 0',
    borderBottom: '1px solid #444',
    fontSize: '1rem',
  },
  removeButton: {
    background: '#ff4d4d',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '0.85rem',
    border: 'none',
    borderRadius: '6px',
    padding: '0.4rem 0.8rem',
    cursor: 'pointer',
    transition: 'background 0.2s ease-in-out',
  },
};

export default TodoList;
