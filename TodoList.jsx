// Project: To Do List
// Purpose: TodoList - render to-do list that allows user to add tasks through input field and display each task using the TodoItem component
// Developer: Miriam Iny
// Credits: ToDoList.css credited to Miss T. Lachman
// Date: 5/5/25


import { useState } from "react";
import { TodoItem } from "./TodoItem"; 
import './ToDoList.css'

export function TodoList() {
    // State to manage the list of tasks
    const [tasks, setTasks] = useState([]);
    // State to manage the current input value
    const [task, setTask] = useState('');

    // Handle input field changes
    const handleChange = (event) => {
        setTask(event.target.value);
    }
    
    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // precent refresh

        // Prevent adding empty tasks
        if (!task.trim()) {
            alert("Task cannot be empty.");
            return;
        }
        // Add the new task to the list
        setTasks(prevTasks => [...prevTasks, task]);
        // Clear the input field
        setTask('');
    }
              
    return (
        <div className='container'>

            <h1 className="header">To Do List</h1>

            {/* Conditional rendering: Show tasks or a message if no tasks */}
            {tasks.length > 0 ? (
                <ul className="task-list">
                    {/* Render each task using the TodoItem component (returns li)*/}
                    {tasks.map((task, index) => (
                        <TodoItem 
                            key={index}
                            taskId={index}   
                            taskText={task} 
                            // Remove task when the remove function is called
                            remove={() => setTasks(prevTasks => prevTasks.filter((_, i) => i !== index))}
                        />
                    ))}
                </ul>
            ) : (
                // Message when no tasks are available
                <p>No tasks available.</p>
            )}  

            {/* Form to add new tasks */}
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Enter a task: 
                    <input className="input-field"
                        type="text" 
                        name="task" 
                        value={task} 
                        onChange={handleChange}
                    />
                </label>
                <button className="add-button" type="submit">Add</button>
            </form>          
        </div>
    );
}