import React, { useState } from "react";
import '../style/FormTask.css'
import { v4 as uuidv4 } from "uuid";

function FormTask(props){
  const [input, setInput] = useState('')
  const change = e =>{
    //Extre el valor de un campo de texto, es decir extrae letra a letra en tiempo real
    setInput(e.target.value);
    console.log (e.target.value)
  }

  const send = e => {
   
      //no se vuelve a cargar toda la aplicacion al mandar el formulario
      e.preventDefault();
      
      const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }

    props.onSubmit(newTask);

    // Limpia el campo de entrada después de enviar
    setInput('');
  };

      return(
      <form
         className="task-form"
         onSubmit={send}>
          <input
            className="task-input"
            type="text"
            placeholder="Escribe una tarea"
            name="text"
            onChange={change}
          />
          <button className="task-button">
            Agregar Tarea
          </button>
      </form>
    );
}

export default FormTask;