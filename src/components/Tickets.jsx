import React, { useEffect, useState } from 'react'
import TicketGrid from './TicketGrid';
import TaskGrid from './TaskGrid';
import Banner from './Banner';

function Tickets() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch(import.meta.env.BASE_URL + "tickets.json")
         .then(res => res.json())
         .then(data => setCards(data));
    },[]);

    return (
      <div>
          <Banner cards={cards} />
          
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6'>
        <div className='col-span-1 md:col-span-2'>
              <TicketGrid cards={cards} />
        </div>
        <div className='md:col-span-1'>
              <TaskGrid cards={cards} />
        </div>



      </div>
      </div>
    )

  


} 

export default Tickets;