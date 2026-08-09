import TaskItem from "./TaskItem";
import "../style/TaskList.css";

const EMPTY_MESSAGES = {
  all: {
    title: "No tasks yet",
    subtitle: "Add your first task above to get started.",
  },
  active: {
    title: "Nothing left to do",
    subtitle: "All your tasks are completed.",
  },
  completed: {
    title: "No completed tasks",
    subtitle: "Tasks you finish will show up here.",
  },
};

export default function TaskList({ tasks, filter, onToggle, onUpdate, onRemove }) {
  if (tasks.length === 0) {
    const message = EMPTY_MESSAGES[filter];
    return (
      <div className="task-list-empty">
        <p className="task-list-empty-title">{message.title}</p>
        <p className="task-list-empty-subtitle">{message.subtitle}</p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onUpdate={onUpdate}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}
