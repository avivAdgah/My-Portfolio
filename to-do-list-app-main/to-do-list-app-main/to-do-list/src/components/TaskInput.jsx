import { useState } from "react";
import "../style/TaskInput.css";

export default function TaskInput({ onAdd }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    const trimmed = value.trim();
    if (!trimmed) {
      setError("Type something before adding a task.");
      return;
    }
    onAdd(trimmed);
    setValue("");
    setError("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") submit();
  };

  return (
    <div className="task-input">
      <div className="task-input-row">
        <label htmlFor="new-task" className="sr-only">
          Add a new task
        </label>
        <input
          id="new-task"
          className={`task-input-field${error ? " has-error" : ""}`}
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (error) setError("");
          }}
          onKeyDown={handleKeyDown}
          placeholder="What do you need to do?"
        />
        <button className="task-input-button" onClick={submit}>
          Add Task
        </button>
      </div>
      {error && (
        <p className="task-input-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
