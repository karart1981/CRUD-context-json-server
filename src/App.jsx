import './App.css'
import {useState, useEffect} from 'react';
import DashBoard from './components/DashBoard'
import {TaskContext} from './context'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

function App() {   
  const [tasks, setTasks] = useState([]);
  const[currentFilter,setCurrentFilter] = useState("all")

    const addTask = task=> {
      setTasks([...tasks, task])
    }

    const handleDelete = id =>{
      setTasks(tasks.filter(x=> x.id != id))
    }
    
    const handleProgress = ()=>{
      let temp = [...tasks]
      let progressed = temp.filter(task=> task.status == "in progress")
      return progressed.length
    }
  
    const handleUnstart = ()=>{
      let temp = [...tasks]
      let unstarted = temp.filter(task=> task.status == "unstarted")
      return unstarted.length
    }
  
    const handleCompleted = ()=>{
      let temp = [...tasks]
      let completed = temp.filter(task=> task.status == "completed")
      return completed.length
    }

    useEffect(()=>{
        axios
       .get("http://localhost:3006/tasks")
       .then(response => {
        setTasks(response.data)
       })
    })  
  return (
    <>
      <TaskContext.Provider value={{tasks, onDel: handleDelete, onAdd: addTask, currentFilter, onSet:setCurrentFilter,handleProgress,handleUnstart, handleCompleted}}>
        <DashBoard />
      </TaskContext.Provider>
    </>
  )
}

export default App
