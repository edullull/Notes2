import React, {useState} from "react";
import '../hojas-de-estilos/TareaFormulario.css';
import { v4 as uuidv4} from 'uuid';

function TareaFormulario(props){

    const [ input, setInput] = useState('');

    const manejarCambio = e =>{
        setInput(e.target.value); //extrae el valor del texto o campo
    }

    const manejarEnvio = e =>{
        e.preventDefault(); // se utiliza para que no se vuelva a cargar
        const nuevaTarea = {
            id : uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(nuevaTarea);
    }

    return(
        <form 
            className="Tarea-formulario"
            onSubmit={manejarEnvio}>
            <input 
                className="tarea-input"
                type="text" 
                placeholder="Escribe una tarea"
                name="texto"
                onChange={manejarCambio}
            />
            <button className="tarea-boton">Agregar Tarea</button>
        </form>
    );
}

export default TareaFormulario;