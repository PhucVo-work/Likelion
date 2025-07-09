import React, { useState } from "react";

function SimpleToDoList() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAdd = () => {
    if (task.trim()) {
      setTasks([...tasks, task.trim()]);
      setTask("");
    }
  };

  const handleDelete = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 style={{ color: "#007bff" }}>SIMPLE TO DO LIST</h2>
      <hr style={{ borderColor: "#007bff", marginBottom: "20px" }} />
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
          style={{ padding: "5px", marginRight: "10px" }}
        />
        <button
          onClick={handleAdd}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "5px 10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>
      <hr style={{ borderColor: "#ccc", margin: "20px 0" }} />
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((item, index) => (
          <li
            key={index}
            style={{
              margin: "5px 0",
              padding: "5px",
              backgroundColor: "#f0f0f0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {item}
            <button
              onClick={() => handleDelete(index)}
              style={{
                backgroundColor: "#ff4444",
                color: "white",
                padding: "2px 8px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SimpleToDoList;
