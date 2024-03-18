import React from 'react'

const ServiceCard = ({icon, name, path, def}) => {
  return (
    <div className='rounded-md border w-[400px] h-[200px] p-3 border-light bg-[#ffffff]  gap-3'>
        <span className=' text-4xl bg-light h-72 w-72 '>{icon}</span>        
        <div className=" flex flex-col gap-4">
            <p className="text-xl font-semibold text-black">{name}</p>
            <p className='text-base'>{def}</p>

            {/* <div className="text-[10px] flex justify-end text-light items-end">Know more...</div> */}
        </div>
    </div>
  )
}

export default ServiceCard