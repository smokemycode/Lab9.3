import type { TaskItemProps, TaskStatus } from '../../types';

function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onStatusChange(task.id, e.target.value as TaskStatus);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const formattedDate = new Date(task.dueDate).toLocaleDateString();

  return (
    <li className={`task-item task-item--${task.status} task-item--priority-${task.priority}`}>
      <div className="task-item__header">
        <h3 className="task-item__title">{task.title}</h3>
        <span className="task-item__priority">Priority: {task.priority}</span>
      </div>

      <p className="task-item__description">{task.description}</p>

      <div className="task-item__footer">
        <span className="task-item__due">Due: {formattedDate}</span>

        <select
          className="task-item__status"
          value={task.status}
          onChange={handleStatusChange}
          aria-label="Change task status"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <button
          className="task-item__delete"
          onClick={handleDelete}
          type="button"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;