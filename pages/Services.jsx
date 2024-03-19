import React from 'react'
import { useParams } from 'react-router-dom'

const Services = () => {
  const {id} = useParams()
  
  return (
    <div>
      {id ?
      <div className='md:mb-10 bg-orange-50 py-5 md:py-10 px-6 md:px-24 mb-5'>
        <p className="text-primary text-center font-bold text-4xl capitalize">{id}</p>
        <div>
          
        </div>
      </div> :
      <p className="text-5xl text-center text-gray-400 font-bold py-10">Please select a service to preview</p>
      }
    </div>
  )
}

export default Services