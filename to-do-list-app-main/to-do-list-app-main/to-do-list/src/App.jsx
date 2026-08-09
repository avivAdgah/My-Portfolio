import { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskFilters from "./components/TaskFilters";
import TaskStats from "./components/TaskStats";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import "./style/App.css";

function loadTasks() {
  try {
    const raw = localStorage.getItem("tasks");
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (task) => task && typeof task.id !== "undefined" && typeof task.text === "string"
    );
  } catch {
    return [];
  }
}

function App() {
  const [tasks, setTasks] = useState(loadTasks);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch {
      // storage unavailable or full; keep working in-memory
    }
  }, [tasks]);

  const addTask = (text) => {
    setTasks((prev) => [...prev, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const updateTask = (id, text) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, text } : task)));
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.completed));
  };

  const visibleTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="app-shell">
      <div className="app-container">
        <Header />
        <TaskInput onAdd={addTask} />
        <TaskStats tasks={tasks} onClearCompleted={clearCompleted} />
        <TaskFilters filter={filter} onFilterChange={setFilter} />
        <TaskList
          tasks={visibleTasks}
          filter={filter}
          onToggle={toggleTask}
          onUpdate={updateTask}
          onRemove={removeTask}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
