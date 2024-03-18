import React from 'react'
import { mission } from '../utils/constants'
import MissionList from './MissionList'

const Mission = () => {
  return (
    <div>
      <p className="text-4xl text-primary font-bold text-center">Our Mission</p>
      <div className="pt-3 flex flex-col gap-3">
        {mission.map((item, i) => (
          <MissionList
            key={i}
            title=""
            content="Our mission is to integrate expertise, innovation, and strategic approach to deliver tangible outcomes for our valued clients"
          />
        ))}
      </div>
    </div>
  );
}

export default Mission