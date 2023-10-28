import '../css/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const Task = ({text, completed}) => {
  return (
    <div className={completed ? 'task-container completed' : 'task-container'}>
      <div className="task__text">
        {text}
      </div>
      <div className='task__icon-container'>
        <AiOutlineCloseCircle className="task__icon" />
      </div>

    </div>
  )
}