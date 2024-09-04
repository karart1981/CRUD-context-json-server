import React from 'react'
import TaskList from './TaskList';
import {AddTask} from './AddTask';
import Status from './Status';
import FilterTasks from './FilterTasks';

const DashBoard = () => {
    
  return (
    <div className='dashboard'>
        <h2 className="text-center p-4">Tasks List</h2>
        
        <div className="d-flex-column gap-3 justify-content-between">
           <AddTask/>
           <FilterTasks />
           <TaskList/>
        </div>
        <Status/>
    </div>
  )
}

export default DashBoard
