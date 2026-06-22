import { useState } from "react";
import "./App.css";

function App() {
  const [showTodo, setShowTodo] = useState(false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  if (!showTodo) {
    return (
      <div className="landing">

        <div className="profile-card">
          <div className="avatar">
            AMZ
          </div>

          <div className="profile-info">
            <h1>Alif Muhammad Zahid</h1>
            <p>NIM: 2403040125</p>
            <p>
              Implementasi Deployment React.js menggunakan
              GitHub dan Vercel
            </p>
          </div>
        </div>

        <div className="grid-info">

          <div className="info-box">
            <h3>⚛ React.js</h3>
            <p>Frontend Framework untuk membangun UI modern.</p>
          </div>

          <div className="info-box">
            <h3>🐙 GitHub</h3>
            <p>Tempat penyimpanan source code project.</p>
          </div>

          <div className="info-box">
            <h3>▲ Vercel</h3>
            <p>Platform deployment aplikasi React.</p>
          </div>

          <div className="info-box">
            <h3>✅ Status</h3>
            <p>Project berhasil dijalankan dan online.</p>
          </div>

        </div>

        <button
          className="main-btn"
          onClick={() => setShowTodo(true)}
        >
          Buka To-Do List
        </button>

      </div>
    );
  }

  return (
    <div className="container">

      <h1>📝 To-Do List</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Masukkan tugas..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>
          Tambah
        </button>
      </div>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <span>{item}</span>

            <button
              className="delete-btn"
              onClick={() => deleteTask(index)}
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>

      <button
        className="back-btn"
        onClick={() => setShowTodo(false)}
      >
        ← Kembali ke Beranda
      </button>

    </div>
  );
}

export default App;
