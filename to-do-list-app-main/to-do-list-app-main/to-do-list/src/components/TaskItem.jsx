import { useState } from "react";
import "../style/TaskItem.css";

export default function TaskItem({ task, onToggle, onUpdate, onRemove }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftText, setDraftText] = useState(task.text);

  const startEdit = () => {
    setDraftText(task.text);
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  const saveEdit = () => {
    const trimmed = draftText.trim();
    if (!trimmed) return;
    onUpdate(task.id, trimmed);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") saveEdit();
    if (e.key === "Escape") cancelEdit();
  };

  return (
    <li className={`task-item${task.completed ? " is-completed" : ""}`}>
      <input
        type="checkbox"
        className="task-item-checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        aria-label={
          task.completed
            ? `Mark "${task.text}" as active`
            : `Mark "${task.text}" as complete`
        }
      />

      {isEditing ? (
        <input
          type="text"
          className="task-item-edit-field"
          value={draftText}
          onChange={(e) => setDraftText(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <span className="task-item-text">{task.text}</span>
      )}

      <div className="task-item-actions">
        {isEditing ? (
          <>
            <button
              className="task-item-button save"
              onClick={saveEdit}
              aria-label="Save task"
            >
              <i className="fa-solid fa-check" aria-hidden="true"></i>
            </button>
            <button
              className="task-item-button cancel"
              onClick={cancelEdit}
              aria-label="Cancel editing"
            >
              <i className="fa-solid fa-xmark" aria-hidden="true"></i>
            </button>
          </>
        ) : (
          <>
            <button
              className="task-item-button edit"
              onClick={startEdit}
              aria-label={`Edit "${task.text}"`}
            >
              <i className="fa-solid fa-pencil" aria-hidden="true"></i>
            </button>
            <button
              className="task-item-button delete"
              onClick={() => onRemove(task.id)}
              aria-label={`Delete "${task.text}"`}
            >
              <i className="fa-solid fa-trash" aria-hidden="true"></i>
            </button>
          </>
        )}
      </div>
    </li>
  );
}
