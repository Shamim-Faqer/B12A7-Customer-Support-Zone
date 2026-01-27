import React from 'react'

const TaskGrid = ({cards}) => {
  return (
    <div className='bg-gray-200 rounded-xl shadow-xl p-6 m-6'>
      <div className='space-y-4'>
        <h2 className='text-xl font-bold mb-4'>Task Status</h2>
        <p className='p-4 bg-base-200 rounded-xl'>Select a Ticket to add to task Status</p>
      </div>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold mb-4'>Resolved Tasks</h2>
        <p className='p-4 bg-base-200 rounded-xl'>Select a Ticket to add to Resolved Tasks</p>
      </div>
    </div>
  )
}

export default TaskGrid;
