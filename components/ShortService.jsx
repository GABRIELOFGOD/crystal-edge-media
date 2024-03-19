import React from 'react'
import { services } from '../utils/constants'
import { Link } from 'react-router-dom'
import ServiceCard from './ServiceCard'
import { ContextUser } from '../utils/ReusableFunctions'

const ShortService = () => {
  const { setService, service } = ContextUser();

  return (
    <div className=' py-5 md:py-20 px-6 md:px-24'>
        <p className="text-primary text-center font-bold text-4xl capitalize">Our Services</p>
        <div className='flex w-full justify-between gap-5 flex-wrap flex-col md:flex-row mt-5'>
            {services.slice(0, 3).map((service, i) => (
              <ServiceCard
                def={service.def}
                path={service.path}
                name={service.name}
                icon={service.icon}
                key={i}
              />
            ))}
        </div>
        <button onClick={() => setService(!service)} className="justify-end flex items-end mt-5 duration-200 hover:bg-primary hover:text-white px-6 py-3 rounded-full w-fit text-primary font-semibold">See All Services</button>
    </div>
  )
}

export default ShortService