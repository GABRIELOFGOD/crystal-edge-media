import React from 'react';
const noImg = '/images/no-image.jpg';

const ClientCard = ({image, name}) => {
  return (
    <div className='flex w-[300px] bg-white'>
        <img className='w-[100px] h-fit' src={image ? image : noImg} alt="company-logo" />
        <p className="text-xl font-bold text-black my-auto">{name}</p>
    </div>
  )
}

export default ClientCard