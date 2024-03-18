import React from 'react';
const noImg = '/images/no-profile-min.jpg'

const TeamCard = ({image, name, desc, country}) => {
  return (
    <div className="flex w-[428px] h-[150px] p-3 rounded-md bg-gray-200 border border-light flex-col gap-3">
      <div className="flex gap-4">
        <img
          className="rounded-full h-[40px] w-[40px]"
          src={image ? image : noImg}
          alt="Team-image"
        />
        <div className='flex flex-col gap-[0.5px]'>
          <p className="font-bold">{name}</p>
          <p className="font-normal text-xs text-gray-600 ">{country}</p>
        </div>
      </div>
      <div className="flex text-start gap-1 flex-col">
        <p className="text-light text-xs">{desc}</p>
      </div>
    </div>
  );
}

export default TeamCard