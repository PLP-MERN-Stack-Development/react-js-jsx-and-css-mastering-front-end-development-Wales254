import React, { useState } from "react";
import Button from "./Button";
import "./TaskManager.css"; // 👈 optional, for styling

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="task-manager-container">
      <h2 className="task-title">Task Manager</h2>

      <div className="task-input-section">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="task-input"
        />
        <Button
          variant="success"
          size="md"
          onClick={addTask}
          disabled={!input.trim()}
        >
          Add Task
        </Button>
      </div>

      <ul className="task-list">
        {tasks.length === 0 ? (
          <p className="empty-msg">No tasks yet. Add one above!</p>
        ) : (
          tasks.map((task, index) => (
            <li key={index} className="task-item">
              <span>{task}</span>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeTask(index)}
              >
                Delete
              </Button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskManager;
