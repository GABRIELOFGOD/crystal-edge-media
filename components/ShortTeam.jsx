import React from 'react'
import { team } from '../utils/constants'
import TeamCard from './TeamCard'
import { Link } from 'react-router-dom'

const ShortTeam = () => {
  return (
    <div className='py-5 md:py-16 px-6 md:px-24'>
        <p className="text-4xl text-primary text-center font-bold">Our Team</p>
        <div className='flex flex-col justify-between gap-5 my-5 flex-wrap md:my-10 md:flex-row'>
            {team.slice(0, 4)?.map((person, i) => (
                <TeamCard
                    key={i}
                    image={person.image}
                    name={person.name}
                    position={person.position}
                />
            ))}
        </div>
        <Link to='team' className="justify-end flex items-end duration-200 hover:bg-primary hover:text-white px-6 py-3 rounded-full w-fit text-primary font-semibold">See All Team Member</Link>
    </div>
  )
}

export default ShortTeam