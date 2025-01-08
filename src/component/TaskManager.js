import React,{useState} from "react";
import {observer} from 'mobx-react-lite'
import { taskStore } from "../store";

const TaskManager=observer(()=>{
  const [task,setTask]= useState('')

  const handleTask=()=>{
    if(task.trim()){
      taskStore.addTask(task)
      setTask('')
    }
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <input
      value={task}
      onChange={(e)=>setTask(e.target.value)}
      />
      <button onClick={handleTask}>Add Task</button>
      <ul>
        {taskStore.tasks.map((t,index)=>(
          <li key={index}>
            {t} <button onClick={()=>taskStore.removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
})
export default TaskManager