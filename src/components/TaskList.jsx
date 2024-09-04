import React from 'react'
import Task from './Task'
import { TaskContext } from '../context'
import { useContext } from 'react'

const TaskList = () => {
  const {tasks,currentFilter} = useContext(TaskContext);

  let filtered = tasks;
    if (currentFilter == 'in progress') {
        filtered = tasks.filter(task => task.status != "completed" && task.status != "unstarted")
    } else if (currentFilter == 'completed') {
        filtered = tasks.filter(task => task.status != "unstarted" && task.status != "in progress")
    } else if(currentFilter == 'unstarted'){
      filtered = tasks.filter(task=> task.status != "completed" && task.status != "in progress")
    }
  return (
    <div>
       <div className="list">
         {
           filtered.map(task=> <Task key={task.id} task={task} />)
         }
       </div>
    </div>
  )
}

export default TaskList
