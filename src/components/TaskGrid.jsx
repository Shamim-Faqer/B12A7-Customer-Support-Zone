import React from 'react'

function TaskGrid ({tasks, onComplete})  {
  return (
    <div className='bg-gray-200 rounded-xl shadow-xl sticky top-6 p-6 m-6'>
      <div className='space-y-4'>
        <h2 className='text-xl font-bold mb-4'>Task Status</h2>
        {tasks.length === 0 && (
          <p className='p-4 bg-base-200 rounded-xl'>Select a Ticket to add to task Status</p>
        )}
     </div>

      <div className='space-y-4'>
        {tasks.map(task => (
          <div key={task.id} className='p-4 bg-base-200 rounded-lg shadow'>
            <h3 className='font-semibold mb-2'>{task.title}</h3>
            <button onClick={() => onComplete(task.id)} className='btn btn-success btn-sm'>
            Completed
            </button>

          </div>
        ))}
        <h2 className='text-xl font-bold mb-4'>Resolved Tasks</h2>
        <p className='p-4 bg-base-200 rounded-xl'>Select a Ticket to add to Resolved Tasks</p>
      </div>
    </div>
  )
}

export default TaskGrid;
