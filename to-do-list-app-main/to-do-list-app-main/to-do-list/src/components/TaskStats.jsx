import "../style/TaskStats.css";

export default function TaskStats({ tasks, onClearCompleted }) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  if (total === 0) return null;

  const handleClearCompleted = () => {
    if (window.confirm(`Clear ${completed} completed task${completed === 1 ? "" : "s"}?`)) {
      onClearCompleted();
    }
  };

  return (
    <div className="task-stats">
      <div className="task-stats-row">
        <span className="task-stats-summary">
          {total} task{total === 1 ? "" : "s"} &bull; {completed} completed
        </span>
        {completed > 0 && (
          <button className="task-stats-clear" onClick={handleClearCompleted}>
            Clear completed
          </button>
        )}
      </div>
      <div
        className="task-stats-progress-track"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${completed} of ${total} tasks completed`}
      >
        <div className="task-stats-progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <span className="task-stats-progress-label">
        {completed} of {total} completed
      </span>
    </div>
  );
}
