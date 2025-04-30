import { useEffect, useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (text.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text, done: false }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  return (
    <section className="full-page centralized-content">
      <div className='main-content'>
        <div className='container'>
          <div className='centralized-content header'>
            <h1>Lista de Tarefas</h1>
            <TaskInput onAdd={addTask} />
          </div>
          <TaskList tasks={tasks} onRemove={removeTask} onToggle={toggleTask} />
        </div>
      </div>
      </section>
  );
}

export default App;
