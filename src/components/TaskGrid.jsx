import React from 'react'

const TaskGrid = ({cards}) => {
  return (
    
    <div>
      <h2 className="text-xl font-bold mb-4">Task Status</h2>

      <div className="space-y-4">

        <div className="p-4 bg-base-200 rounded-xl">
          ✅ Done 
        </div>

        <div className="p-4 bg-base-200 rounded-xl">
          ⏳ In Progress
        </div>

        <div className="p-4 bg-base-200 rounded-xl">
          ❌ Open 
        </div>

      </div>
    </div>
  )
}

export default TaskGrid;
