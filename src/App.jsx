import freeCodeCampLogo from './images/freecodecamp-logo.png';
import './css/App.css';
import { Task } from './components/Task';
import { Tasklist } from './components/Tasklist';

function App() {
  return (
    <div className='task-app-container'>
      <div className='freecodecamp-logo-container'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo} 
          alt="freecodecamp-logo" 
        />
      </div>
      <div className='task-list__main'>
        <h1>My Tasks</h1>
        <Tasklist />
        
      </div>
    </div>
  );
}

export default App;
