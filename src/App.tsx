import { useState } from 'react';
import type { Task, TaskStatus } from './types';
import TaskList from './components/TaskList/TaskList';
import './App.css';

const InitialTasks: Task[] = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Description 1',
    status: 'pending',
    priority: 'low',
    dueDate: '2023-12-31',
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Description 2',
    status: 'in-progress',
    priority: 'medium',
    dueDate: '2024-01-01',
  },
  {
    id: '3',
    title: 'Task 3',
    description: 'Description 3',
    status: 'completed',
    priority: 'high',
    dueDate: '2024-01-02',
  },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(InitialTasks);

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleDelete = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  return (
    <main className="app">
      <h1 className="app__title">Task Manager</h1>
      <TaskList
        tasks={tasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </main>
  );
}

export default App;