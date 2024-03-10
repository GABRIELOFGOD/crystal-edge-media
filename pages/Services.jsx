import React from 'react'
import { services } from '../utils/constants'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <div className='md:mb-10 bg-orange-50 py-5 md:py-20 px-6 md:px-24 mb-5'>
        <p className="text-primary text-center font-bold text-4xl capitalize">Our Services</p>
        <div className='flex justify-between gap-3 flex-wrap flex-col md:flex-row mt-5'>
            {services.map((service, i) => (
                <Link className='md:max-w-[30%]' key={i}>
                    <ServiceCard icon={service.icon} name={service.name} />
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Services