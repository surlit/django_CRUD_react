import {React,useEffect, useState} from 'react'
import TasksCard from './TasksCard'
import { getAllTasks } from '../api/tasks.api';


export default function TasksList() {
    const [tasksState,setTasks] = useState([])
    useEffect(() => {
        async function  loadTasks() {
            const res = await getAllTasks();
            setTasks(res.data)
        }
        loadTasks();
    }, []);
  return (
    
    <div 
        className='grid grid-cols-3 gap-3'
    >
        {tasksState.map(task => (
            <TasksCard
                key={task.id}  
                data={task}
        />
        ))}
        
    </div>
    
  )
}
