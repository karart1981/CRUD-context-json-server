import React from 'react'
import { useContext } from 'react'
import { TaskContext } from '../context'


const Status = () => {
  const {tasks, handleProgress, handleUnstart, handleCompleted} = useContext(TaskContext)

  
  return (
    <div className="mt-4">
    <h3>Status of Tasks</h3>
    <div style={{display:"flex", gap: 30}}>
      <p>
          Unstarted
          <span className="ms-2"> 
             { handleUnstart() }
             / {tasks.length}
          </span>
      </p>
      <p>
          In Progress
          <span className="ms-2">
            {
              handleProgress()
            }
            / {tasks.length}
          </span>
      </p>  
      <p>
          Completed
          <span className="ms-2">
            { 
               handleCompleted()
            }
            / {tasks.length}
          </span>
      </p>
    </div>
    </div>
  )
}

export default Status
