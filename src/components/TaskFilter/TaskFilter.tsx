import { useState } from 'react';
import type { TaskFilterProps, TaskStatus, TaskPriority } from '../../types';

function TaskFilter({ onFilterChange }: TaskFilterProps) {
  const [status, setStatus] = useState<TaskStatus | ''>('');
  const [priority, setPriority] = useState<TaskPriority | ''>('');

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as TaskStatus | '';
    setStatus(value);
    onFilterChange({
      status: value === '' ? undefined : value,
      priority: priority === '' ? undefined : priority,
    });
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as TaskPriority | '';
    setPriority(value);
    onFilterChange({
      status: status === '' ? undefined : status,
      priority: value === '' ? undefined : value,
    });
  };

  return (
    <div className="task-filter">
      <label className="task-filter__label">
        Status
        <select
          className="task-filter__select"
          value={status}
          onChange={handleStatusChange}>
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>

      <label className="task-filter__label">
        Priority
        <select
          className="task-filter__select"
          value={priority}
          onChange={handlePriorityChange}
        >
          <option value="">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
    </div>
  );
}

export default TaskFilter;