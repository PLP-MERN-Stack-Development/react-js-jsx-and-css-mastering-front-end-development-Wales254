import { useState, useEffect } from "react";
import "./App.css";
import TaskManager from "./components/TaskManager";
import { fetchUsers } from "./api/fetchUsers";

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch users on load
  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const userData = await fetchUsers();
      setUsers(userData);
      setLoading(false);
    };

    getUsers();
  }, []);

  return (
    <div className="app-container">
      <header className="header">
        <h1>PLP Task Manager</h1>
      </header>

      <main className="main">
        {/* Counter Section */}
        <section className="counter-section">
          <p>
            Edit <code>src/App.jsx</code> and save to test hot reload
          </p>

          <div className="counter-controls">
            <button
              onClick={() => setCount((count) => count - 1)}
              className="btn btn-red"
            >
              -
            </button>
            <span className="count">{count}</span>
            <button
              onClick={() => setCount((count) => count + 1)}
              className="btn btn-green"
            >
              +
            </button>
          </div>

          <p className="info-text">Implement your TaskManager component below</p>
        </section>

        {/* Task Manager */}
        <TaskManager />

        {/* API Section */}
        <section className="api-section">
          <h2>Fetched Users</h2>
          {loading ? (
            <p>Loading users...</p>
          ) : users.length > 0 ? (
            <ul className="user-list">
              {users.map((user) => (
                <li key={user.id} className="user-card">
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                  <small>{user.company.name}</small>
                </li>
              ))}
            </ul>
          ) : (
            <p>No users found.</p>
          )}
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} MERN STACKFLOW. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
