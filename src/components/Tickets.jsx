import React, { useEffect, useState } from 'react'
import TicketGrid from './TicketGrid';
import TaskGrid from './TaskGrid';
import Banner from './Banner';
import { toast } from 'react-toastify';

function Tickets() {

    const [cards, setCards] = useState([]);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(import.meta.env.BASE_URL + "tickets.json")
         .then(res => res.json())
         .then(data => setCards(data));
    },[]);

    const handleSelect = (ticket) => {
      if (ticket.status === "Done") {
        toast.error("This ticket is already resolved");
        return;
      }
      
      setTasks(prev => {
        const exits = prev.find(t => t.id === ticket.id);

        if (exits) {
          toast.info("Ticket already in task list");
          return prev;
        }
        toast.success("Ticket added to task");
        return[...prev,ticket]; 
      });
      };

      const handleComplete = (id) => {
        setCards(prev => prev.map(card => card.id === id ? {...card, status: "Done"} : card));
        setTasks(prev => prev.filter(task => task.id !== id));

        toast.success("Ticket resolved");
      };



    return (
      <div>
          <Banner cards={cards} />
          
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 p-6'>

        <div className='lg:col-span-2'>
              <TicketGrid cards={cards} onSelect={handleSelect} />
        </div>
        <div className='lg:col-span-1'>
              <TaskGrid tasks={tasks} onComplete = {handleComplete} />
        </div>



      </div>
      </div>
    )

  


} 

export default Tickets;