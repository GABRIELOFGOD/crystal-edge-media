import React from 'react'
import { mission } from '../utils/constants'
import MissionList from './MissionList'

const Mission = () => {
  return (
    <div>
        <p className="text-4xl text-primary font-bold">Our Mission</p>
        <div className="pt-3 flex flex-col gap-3">
            {mission.map((item, i) => (
                <MissionList
                    key={i}
                    title='This is a Sample Titile'
                    content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit eligendi itaque ad ratione harum, modi quae omnis maiores culpa eos natus quos quam autem distinctio possimus eius esse quasi velit quas sint.'
                />
            ))}
        </div>
    </div>
  )
}

export default Mission