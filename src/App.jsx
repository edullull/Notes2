import reactLogo from './assets/react.svg'
import './App.css'
import img1 from  './imagenes/calendar.png'
import TareaFormulario from './componentes/TareaFormulario';
import Tarea from './componentes/Tarea';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {

  return (
    

    <div className="App">
        <h2>Mi primera AppNotes</h2>
        <img className="calendar" src={img1} alt="" />

       <div className='tareas-lista-principal'>
          <h1>Mis Tareas</h1>
          <ListaDeTareas />
       </div>

    </div>
      
  )
}

export default App
