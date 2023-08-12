import "./App.css";
import React, { useState } from "react"; // Import React and useState
import {Task} from "./Task"

function App() {
  const [todoList, setTodoList] = useState([]); // Initialize todoList state
  const [newTask, setNewTask] = useState(""); // Initialize newTask state

  const handleChange = (event) => {
    setNewTask(event.target.value); // Update newTask state with the input value
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]); // Update List with the new task object
    setNewTask(""); // Clear the input after adding task
  };

  const removeTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id)); // Update the List by removing the required task
  };
  const completeTask = (id) => {
    setTodoList(
      todoList.map((task)=>{
        if (task.id === id){
          return { ...task, completed : true};
        }else {
          return task;
        }
      })
    )
    

  }
  return (
    
    <div className="App">
      <div className="box">
      <h1 className="animate-charcter">To Do List</h1>
      <div className="">
        <input value={newTask} onChange={handleChange} required/>
       &nbsp; <button className="button-15" onClick={addTask}>Add Task</button>
      </div></div>
      <div className="list">
        {todoList.map((task) => {
          return  <Task 
                    taskName={task.taskName} 
                    id={task.id} 
                    completed={task.completed}
                    removeTask={removeTask} 
                    completeTask={completeTask}/>
        })}
        
      </div>
    </div>
  );
}

export default App;
