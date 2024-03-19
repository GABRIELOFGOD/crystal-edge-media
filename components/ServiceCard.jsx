import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({icon, name, path, def}) => {
  return (
    <Link to={`services/${path}`} className='rounded-md border w-full md:w-[30%] py-4 px-6 border-light bg-[#ffffff] '>
        <div className='p-2 rounded-full w-fit mb-3 bg-light'><span className=' text-3xl text-white '>{icon}</span> </div>       
        <div className=" flex flex-col gap-2">
            <p className="text-xl font-semibold text-black">{name}</p>
            <p className='text-sm '>{def}</p>

            {/* <div className="text-[10px] flex justify-end text-light items-end">Know more...</div> */}
        </div>
    </Link>
  )
}

export default ServiceCard