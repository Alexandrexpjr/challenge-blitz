import React, { useContext, useState } from 'react';
import myContext from '../context/myContext';
import { createTask } from '../services/requestAPI';

function AddTask() {
  const [ currentTitle, setTitle ] = useState('');
  const [ currentDescription, setDescription ] = useState('');
  const [ currentStatus, setStatus ] = useState('pendente');
  const { setTasks } = useContext(myContext);

  const handleClick = async (event) => {
    event.preventDefault();

    setStatus('pendente');
    setDescription('');
    setTitle('');
    await createTask('task', { title: currentTitle, description: currentDescription, status: currentStatus });
    setTasks(previous => previous + 1);
  };

  return (
    <form className='add-task'>
      <label htmlFor="title-input">
        Tarefa:
        <input type="text" name="title" id="title-input" onChange={({target}) => setTitle(target.value)} value={currentTitle} />
      </label>

      <label htmlFor="description-input">
        Descrição:
        <input type="text" name="title" id="title-input" onChange={({target}) => setDescription(target.value)} value={currentDescription} />
      </label>

      <label htmlFor="status">
        <select name="status" id="status" defaultValue="pendente" onChange={ ({target}) => setStatus(target.value) } value={currentStatus}>
          <option value="pendente">Pendente</option>
          <option value="em andamento">Em andamento</option>
          <option value="pronto">Pronto</option>
        </select>
      </label>

      <button type="submit" onClick={ handleClick } className="add-task-btn">Adicionar tarefa</button>
    </form>
  );
}

export default AddTask;