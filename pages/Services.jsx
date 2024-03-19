import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { services } from '../utils/constants'

const Services = () => {
  const [current, setCurrent] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    services.map(service => {
      if(service.path == id){
        setCurrent(service)
      }
    })
  }, [])
  
  return (
    <div>
      {current ?
      <div className='md:mb-10 bg-orange-50 py-5 md:py-10 px-6 md:px-24 mb-5'>
        <p className="text-primary text-center font-bold text-4xl capitalize">{current.name}</p>
        <div className="w-full flex justify-center"><p className="text-light md:w-[800px] text-sm text-center">{current.def}</p></div>
        <div className='flex md:flex-row flex-col justify-between'>
          <div className='text-6xl text-primary'>{current.icon}</div>
          <ul className='flex flex-col list-disc'>
            {current.feature.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div> :
      <p className="text-5xl text-center text-gray-400 font-bold py-10">Please select a service to preview</p>
      }
    </div>
  )
}

export default Services