import ExploreBtn from '@/components/ExploreBtn'
import { Key } from 'lucide-react'
import React from 'react'
import EventCard from '@/components/EventCard'
import {events} from '@/lib/constants'



const page = () => {
  return (
    <section>
      <h1 className='text-center mt-5 font-bold text-blue-400'>The Hub for ecery Dev <br />Event You Can not Miss</h1>

    <p className='text-center mt-5 font-semibold'>Hackathons, MeetUps and Conference Meeting</p>

    <ExploreBtn/>

    <div className='mt-20 space-y-7'>
        <h3>Featured events</h3>
        <ul className='events'>
            {events.map((event) =>(
              <li key={event.title}>
                <EventCard {...event}/>
              </li>
            ))}

        </ul>

    </div>


    </section>
  )
}

export default page