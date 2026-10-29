import { useMemo, useState } from 'react';
import type { TaskListProps, TaskStatus, TaskPriority, } from '../../types';
import TaskItem from '../TaskItem/TaskItem';
import TaskFilter from '../TaskFilter/TaskFilter';

type FilterState = {
  status?: TaskStatus;
  priority?: TaskPriority;
};

function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
  const [filters, setFilters] = useState<FilterState>({});

  const visibleTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filters.status && task.status !== filters.status) return false;
      if (filters.priority && task.priority !== filters.priority) return false;
      return true;
    });
  }, [tasks, filters]);

  return (
    <section className="task-list">
      <TaskFilter onFilterChange={setFilters} />

      {visibleTasks.length === 0 ? (
        <p className="task-list__empty">No tasks match the current filters.</p>
      ) : (
        <ul className="task-list__items">
          {visibleTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onStatusChange={onStatusChange}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default TaskList;