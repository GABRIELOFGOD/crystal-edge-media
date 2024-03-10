import React from 'react'
import { services } from '../utils/constants'
import { Link } from 'react-router-dom'
import ServiceCard from './ServiceCard'

const ShortService = () => {
  return (
    <div className='md:mb-10 bg-orange-50 py-5 md:py-20 px-6 md:px-24 mb-5'>
        <p className="text-primary text-center font-bold text-4xl capitalize">Our Services</p>
        <div className='flex justify-between gap-3 flex-wrap flex-col md:flex-row mt-5'>
            {services.slice(0, 3).map((service, i) => (
                <Link className='md:max-w-[30%]' key={i}>
                    <ServiceCard icon={service.icon} name={service.name} />
                </Link>
            ))}
        </div>
        <Link to='services' className="justify-end flex items-end mt-5 duration-200 hover:bg-primary hover:text-white px-6 py-3 rounded-full w-fit text-primary font-semibold">See All Services</Link>
    </div>
  )
}

export default ShortService