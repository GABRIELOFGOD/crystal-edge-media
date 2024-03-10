import React from 'react';
import { GoDotFill } from "react-icons/go";

const MissionList = ({title, content}) => {
  return (
    <div className='flex gap-3 '>
        <GoDotFill className='font-extrabold text-6xl mt-0 text-primary' />
        <p><span className='text-primary font-bold'>{title}:</span> {content}</p>
    </div>
  )
}

export default MissionList