import React, { useState } from 'react';
import { formatDate } from '../helpers';
import { changeStatus } from '../services/requestAPI';

function Task(props) {
  const [ currentStatus, setStatus ] = useState('');
  const { task } = props;
  const { title, status, createdAt, id } = task;

  const handleChange = async ({ target }) => {
    setStatus(target.value);
    await changeStatus(`/task/${id}`, { status: target.value });
  };
  return (
    <div className='task'>
      <p> { title } </p>
      <select name="" id="status" defaultValue={ status } onChange={ handleChange }>
        <option value="pendente">Pendente</option>
        <option value="em andamento">Em andamento</option>
        <option value="pronto">Pronto</option>
      </select>
      <p> { formatDate(createdAt).date } - { formatDate(createdAt).time } </p>
    </div>
  );
}

export default Task;