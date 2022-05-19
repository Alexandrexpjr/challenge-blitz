import React, { useState } from 'react';
import MyContext from './myContext';

function TaskProvider({children}) {
  const [ totalTasks, setTasks ] = useState([]);
  const initialValue = {
    totalTasks,
    setTasks
  };
  return (
    <MyContext.Provider value={ initialValue }>
      {children}
    </MyContext.Provider>
  );
}

export default TaskProvider;