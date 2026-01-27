import React from 'react'

const TicketGrid = ({cards}) => {
  return (<div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-6'>
    {
          cards.map((card)=> (<div key={card.id} className='card card-border shadow-xl bg-gray-200 w-96'>
          <div className='card-body'>
          
           <div className='flex justify-between'>
           <h3 className='card-title' >{card.title}</h3>
           <div className="badge badge-success">{card.status}</div>
           </div>

           <p>{card.description}</p>
         
           <div className='card-actions flex justify-between'>
            <p>#00{card.id}</p>
            <div className="badge badge-outline badge-warning">{card.priority}</div> 
            <p>{card.customer}</p>         
            <p>{card.createdAt}</p>
          </div>
         
         </div>
       
       
        </div>))
      }
  </div>)
    
}

export default TicketGrid;
