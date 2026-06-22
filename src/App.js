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
        <div className="header">
          <h1>Penerapan Deployment & CI/CD pada React.js</h1>
          <p>
            Implementasi deployment aplikasi React menggunakan GitHub dan
            Vercel
          </p>
        </div>

        <div className="card">
          <h2>Identitas Mahasiswa</h2>
          <p><b>Nama:</b> Alif Zahid</p>
          <p><b>NIM:</b> ISI NIM KAMU</p>
        </div>

        <div className="features">
          <div className="box">
            <h3>⚛ React.js</h3>
            <p>Frontend Framework</p>
          </div>

          <div className="box">
            <h3>🐙 GitHub</h3>
            <p>Version Control</p>
          </div>

          <div className="box">
            <h3>▲ Vercel</h3>
            <p>Deployment Platform</p>
          </div>
        </div>

        <div className="card">
          <h2>Status</h2>
          <p>✅ Project React Berjalan</p>
          <p>✅ Source Code Tersimpan di GitHub</p>
          <p>✅ Deployment Berhasil</p>
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
      <h1>To-Do List</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Masukkan tugas..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Tambah</button>
      </div>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}>
              Hapus
            </button>
          </li>
        ))}
      </ul>

      <button
        className="back-btn"
        onClick={() => setShowTodo(false)}
      >
        Kembali
      </button>
    </div>
  );
}

export default App;
