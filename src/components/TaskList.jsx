import { FaTrash } from 'react-icons/fa';

function TaskList({ tasks, onRemove, onToggle }) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li
          key={task.id}
          onClick={() => onToggle(task.id)}
          className={task.done ? 'done' : ''}
        >
          {task.text}
          <span
            onClick={(e) => {
              e.stopPropagation(); // evita marcar como concluída
              onRemove(task.id);
            }}
            style={{ marginLeft: '10px', cursor: 'pointer' }}
            title="Excluir tarefa"
          >
            <FaTrash />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
