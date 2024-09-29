  import React, {useState} from "react";
  import FormTask from "./FormTask";
  import '../style/TaskList.css'
  import Task from "./Task"

  function TaskList(){

  const [tasks, setTask] = useState([]);

  const addTask = (task) => {
    if (task && task.text && task.text.trim()) {
      task.text = task.text.trim();  // limpiar el texto
      const taskUpdate = [task, ...tasks];  // Actualiza la lista de tareas
      setTask(taskUpdate);  // Actualiza el estado con la nueva lista
    } 
  };

  return(
    <>
      <FormTask onSubmit={addTask}/>
        <div className="container-task-list">
          {
          tasks.map((task) =>
            <Task 
            key={task.id}
            id={task.id}
            text= {task.text}
            completed ={task.completed}/>
          )
        }
      </div>
    </>
  );
}

  export default TaskList;