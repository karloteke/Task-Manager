
import './App.css';
import logo from './images/logo.png'
import TaskList from './components/TaskList';


function App() {
  return (
    <div className="application-tasks">
      <div className='container-logo'>
        <header className='header'>
          <img
            src={logo}
            alt='Logo del gestor de tareas'
          />
        </header>
      </div>

        <div className='task-list'>
          <h1>Mis tareas</h1>
            <TaskList />
        </div>
        
      </div>
  );
}

export default App;
