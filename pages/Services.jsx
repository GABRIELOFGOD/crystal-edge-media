import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { services } from '../utils/constants'
import Newsletter from '../components/Newsletter'

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
      <div>
        <div className=' bg-orange-50 py-5 md:py-10 px-6 md:px-24'>
          <p className="text-primary text-center font-bold text-4xl capitalize">{current.name}</p>
          <div className="w-full flex justify-center"><p className="text-light md:w-[800px] text-base text-center">{current.def}</p></div>
          <div className='flex my-10 md:my-20 mx-6 md:mx-52 md:flex-row flex-col justify-between'>
            <div className='text-8xl my-auto text-primary'>{current.icon}</div>
            <div>
              <p className="font-bold mb-5 text-primary text-lg">What we do:</p>
              <ul className='flex my-auto flex-col list-disc'>
                {current.feature.map((item, i) => (
                  <li className='' key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex w-full justify-center"><button className='py-3 px-8 text-white bg-primary rounded-full w-fit'>Request This Service</button></div>
        </div>
        <Newsletter/>
      </div> :
      <p className="text-5xl text-center text-gray-400 font-bold py-10">Please select a service to preview</p>
      }
    </div>
  )
}

export default Services