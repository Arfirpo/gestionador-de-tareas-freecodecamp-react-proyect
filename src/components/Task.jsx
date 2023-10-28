import '../css/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const Task = ({id, text, completed, completeTask, deleteTask}) => {
  return (
    <div className={completed ? 'task-container completed' : 'task-container'}>
      <div className="task__text"
        onClick={()=> completeTask(id)}>
        {text}
      </div>
      <div 
        className='task__icon-container'
        onClick={()=> deleteTask(id)}  >
        <AiOutlineCloseCircle className="task__icon" />
      </div>

    </div>
  )
}