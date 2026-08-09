import "../style/TaskFilters.css";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "completed", label: "Completed" },
];

export default function TaskFilters({ filter, onFilterChange }) {
  return (
    <div className="task-filters" role="group" aria-label="Filter tasks">
      {FILTERS.map(({ key, label }) => (
        <button
          key={key}
          className={`task-filter-button${filter === key ? " is-active" : ""}`}
          onClick={() => onFilterChange(key)}
          aria-pressed={filter === key}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
