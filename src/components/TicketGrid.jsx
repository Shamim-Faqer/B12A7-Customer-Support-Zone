

const TicketGrid = ({cards}) => {
  
  const statusBadge = (status) => {
    if (status === "Done") return "badge-success";
    if (status === "In Progress") return "badge-warning";
    if (status === "Open") return "badge-error";
    return "badge-ghost";
    };
  

  const priorityBadge = (priority) => {
    if (priority === "High") return "badge-success";
    if (priority === "Medium") return "badge-warning";
    if (priority === "Low") return "badge-error";
    return "badge-ghost";
    };


  
  return (<div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-6'>
    {
          cards.map((card)=> (<div key={card.id} className='card card-border shadow-xl bg-base-200 w-96'>
          <div className='card-body'>
          
           <div className='flex justify-between'>
           <h3 className='card-title' >{card.title}</h3>
           <div className={`badge ${statusBadge(card.status)}`}>{card.status}</div>
           </div>

           <p>{card.description}</p>
         
           <div className='card-actions flex justify-between'>
            <p>#00{card.id}</p>
            <div className={`badge badge-soft ${priorityBadge(card.priority)}`}>{card.priority}</div> 
            <p>{card.customer}</p>         
            <p>{card.createdAt}</p>
          </div>
         
         </div>
       
       
        </div>))
      }
  </div>)
    
}

export default TicketGrid;
