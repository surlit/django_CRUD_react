import {React,useEffect} from 'react'
import getAllTasks from '../api/tasks.api'
export default function TasksList() {
    useEffect(() => {
        console.log("pagina Cargada");
    }, []);
  return (
    <div>
        <h1>TasksList</h1>
    </div>
  )
}
