import React from 'react';
import '../style/Task.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({id, text, completed, taskComplet, taskDelete}){
  return(
    // si es verdadero asignaremos GoContainer.task y completed si es falso container-task
    <div className={completed ? 'container-task completed' : 'container-task'}>
      <div 
        className='text-task'
        onClick={() => taskComplet(id)}>
        {text}
      </div>
      <div 
        className='container-icons-task'
        onClick={() => taskDelete(id)}>
          {text}
        <AiOutlineCloseCircle className='task-icon' />
      </div>
    </div>
  );
}

export default Task;