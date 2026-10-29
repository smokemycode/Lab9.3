# Task Manager

A small React + TypeScript task management app demonstrating list rendering with stable keys, filtering, conditional rendering, and typed component props.

## Features

- **Task list** — renders tasks with stable `key={task.id}` props (no index-based keys).
- **Filtering** — filter by status (`pending | in-progress | completed`) and priority (`low | medium | high`) simultaneously. Uses `useMemo` to recompute the visible list only when tasks or filters change.
- **Conditional rendering** — different visual states per task status and priority (left border color, priority pill, strikethrough for completed), plus an empty-state message when no tasks match.
- **Status changes** — change a task's status inline via a dropdown; updates flow through a callback prop from `TaskItem → TaskList → App`, where state is replaced immutably.
- **Delete** — remove a task from the list; state is replaced immutably.
- **Type safety** — `Task`, `TaskStatus`, `TaskPriority`, and all component prop interfaces are defined in `src/types/index.ts`.


## Getting started

```bash
npm install
npm run dev
Then open the printed URL (typically http://localhost:5173)
```

## Build for production
```bash
npm run build
npm run preview
```

## Built with
Vite + React 18 + TypeScript
No external UI libraries — all styling is plain CSS in src/App.css.

## References
React docs — Rendering Lists (key rules)
React docs — Conditional Rendering
React docs — Sharing State Between Components (callback pattern)
React docs — You Might Not Need an Effect / useMemo
Vite — Getting Started
React Fundamental Module

## Reflection
1. I used key={task.id} instead of the index because my list gets filtered and tasks can be deleted, so an index key would shift around and React would lose track of which item is which.

2. I put both filters into one state object and applied them together in a single .filter(), treating "All" as no restriction so they don't conflict, and I used useMemo so it only recomputes when tasks or filters actually change.

3. I kept the task data in App and had the child call onStatusChange up to the parent, which uses setTasks(prev => prev.map(...)) to return a new task object instead of mutating the old one, so React actually re-renders.

4. The main challenge was that "conditional rendering" showed up in different forms across the app, and each one had its own gotcha. I used a ternary for the empty-state fallback and dynamic class names for per-task visual states, and was careful to use explicit comparisons. I also avoided deeply nested ternaries to keep the JSX readable.