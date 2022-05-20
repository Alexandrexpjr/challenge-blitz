import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Task from '../components/Task';
import { requestData } from '../services/requestAPI';
import AddTask from '../components/AddTask';
import myContext from '../context/myContext';

function ToDo() {
  const [toDo, setToDo] = useState([]);
  const [loading, setLoading] = useState(true);
  const { totalTasks } = useContext(myContext);

  useEffect(() => {
    async function getTodo() {
      const tasks = await requestData('/task');
      setToDo(tasks);
      setLoading(false);
    };
    getTodo()
  }, [totalTasks]);

  return (
    <main>
      <h1> Lista de tarefas </h1>
      <AddTask />
      {
        !loading && (
          <ul>
            {
              toDo && toDo.map(task => (
                <li key={task.id}>
                  <Task task={ task } />
                </li>
              ))
            }
          </ul>
        )
      }
    </main>
  );
}

export default ToDo;