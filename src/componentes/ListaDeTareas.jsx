import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import '../hojas-de-estilos/ListaDeTareas.css';

function ListaDeTareas(){

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea =>{
        if(tarea.texto.trim()){ // Verificamos si la cadena no esta vacio
            tarea.texto = tarea.texto.trim();// Trim es un metodo quita los espacios al prin y final del form
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    }
    const eliminarTarea = id =>{
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }
    const completarTarea = id => {
        const tareasActualizadas = tareas.map( tarea =>{
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }

    return(
        <>  
            <TareaFormulario onSubmit={agregarTarea}/>
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) =>
                        <Tarea 
                            key={tarea.id} // Key es algo fundamental en React
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            eliminarTarea={eliminarTarea}
                            completarTarea={completarTarea}/>
                    )
                }
            </div>
        </>
    );
}

export default ListaDeTareas;