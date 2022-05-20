import React, { useContext, useState } from 'react';
import myContext from '../context/myContext';
import { formatDateTime } from '../helpers';
import { changeStatus, deleteTask } from '../services/requestAPI';

function Task(props) {
  const [ currentStatus, setStatus ] = useState('');
  const { task } = props;
  const { title, status, createdAt, id } = task;
  const { setTasks } = useContext(myContext);

  const handleChange = async ({ target }) => {
    setStatus(target.value);
    await changeStatus(`/task/${id}`, { status: target.value });
    if (currentStatus === 'Pronto') {
      await removeTask();
    };
  };

  const removeTask = async () => {
    await deleteTask(`/task/${id}`);
    setTasks(previous => previous - 1);
  }

  const { date, time } = formatDateTime(createdAt);
  return (
    <div className='task'>
      <p> { title } </p>
      <select name="" id="status" defaultValue={ status } onChange={ handleChange }>
        <option value="pendente">Pendente</option>
        <option value="em andamento">Em andamento</option>
        <option value="pronto">Pronto</option>
      </select>
      <p> { time } - { date } </p>
      <button type='buttom' onClick={ removeTask } className="delete-task-btn"> Excluir </button>
    </div>
  );
}

export default Task;