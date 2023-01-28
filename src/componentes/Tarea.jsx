import React from "react";
import '../hojas-de-estilos/Tarea.css'


function Tarea({id, texto, completada, completarTarea, eliminarTarea} ){
    return (
        /*Tarea contenedor y completada son clases de CSS e este caso 
        cambia el estado el componente Tarea*/
        <div className={ completada ? 'tarea-contenedor completada': 'tarea-contenedor' }>
            <div 
                className='tarea-texto'
                onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div 
                className='tarea-icono'
                onClick={ () => eliminarTarea(id)}>
        
            </div>
        </div>
    )
}

export default Tarea;