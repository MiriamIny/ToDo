// Project: To Do List
// Purpose: TodoIem - return list item with task text and remove button
// Developer: Miriam Iny
// Credits: ToDoList.css credited to Miss T. Lachman
// Date: 5/5/25

import './ToDoList.css'

export function TodoItem(props) 
 {
    const {taskId, taskText, remove} = props; 

    return (
      <li className='task-item'>
        <p>{taskText}</p>
        {/* onClick call TodoApp remove function passed through props*/}
        <button className="remove-button" onClick={() => remove(taskId)}> Remove Task</button>
      </li>
    );
  }