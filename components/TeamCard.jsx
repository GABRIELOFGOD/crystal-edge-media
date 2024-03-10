import React from 'react';
const noImg = '/images/no-profile-min.jpg'

const TeamCard = ({image, name, position}) => {
  return (
    <div className='flex py-10 px-5 items-center justify-center rounded-md bg-gray-200 border border-light flex-col gap-3'>
        <img className='rounded-full h-[150px] w-[150px]' src={image ? image : noImg} alt="Team-image" />
        <div className="flex text-center gap-1 flex-col">
            <p className="font-bold">{name}</p>
            <p className="text-light text-xs">{position}</p>
        </div>
    </div>
  )
}

export default TeamCard