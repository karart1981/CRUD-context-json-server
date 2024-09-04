import React from 'react'
import { useContext } from 'react'
import { TaskContext } from '../context'

const FilterTasks = () => {
  const {currentFilter, onSet} = useContext(TaskContext)
  const list = ["all", "unstarted", "in progress", "completed"]
  return (
    <div className="mt-5 mb-2">
       { list.map((criteria,i) => <button style={{margin: "10px", border:"1px solid green", padding: "7px 12px", borderRadius: 7}}
                                    onClick={()=>onSet(criteria)} 
                                    key={i}  
                                    className={currentFilter == criteria? "button-active":null}
                                    > 
                                    {criteria}
                                  </button>)
       }
    </div>
  )
}

export default FilterTasks
