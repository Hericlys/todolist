import { useState } from 'react';

function TaskInput({ onAdd }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    onAdd(input);
    setInput('');
  };

  return (
    <div className='task-input'>
      <input
        type="text"
        value={input}
        placeholder="Digite sua tarefa..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default TaskInput;
