import React from 'react'

const ServiceCard = ({icon, name, path}) => {
  return (
    <div className='rounded-md border py-10 px-10 border-light bg-[#efefef] flex gap-3'>
        <span className='my-auto text-8xl text-primary'>{icon}</span>        
        <div className="my-auto">
            <p className="text-2xl font-semibold text-black">{name}</p>
            {/* <div className="text-[10px] flex justify-end text-light items-end">Know more...</div> */}
        </div>
    </div>
  )
}

export default ServiceCard