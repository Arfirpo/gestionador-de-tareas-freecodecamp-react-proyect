import '../css/Formtask.css';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const Formtask = (props) => {

    const [input, setInput] = useState('');
    const changeHandle = e => {
      setInput(e.target.value);
    };

    const sendHandle = e => {
      e.preventDefault();
      const newTask = {
        id : uuidv4(),
        text: input,
        completed: false
      };
      props.onSubmit(newTask)
    };

  return (
    <form 
      className="form-task-container"
      onSubmit={sendHandle}>
      <input
        className="form-task__input"
        type="text" 
        name="text"
        placeholder="write a task"
        id="text"
        onChange={changeHandle}
      />
      <button 
        className="form-task__button">
          add task
      </button>
    </form>
  )
}

