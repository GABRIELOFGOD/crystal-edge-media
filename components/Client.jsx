import React from 'react'
import ClientCard from './ClientCard'
import { partners } from '../utils/constants'

const Client = () => {
  return (
    <div className='px-3 py-10 md:px-6'>
        <div className='w-full scroll-smooth weba flex overflow-auto'>
            <div className="w-fit flex">
                {partners?.map((item, i) => (
                    <ClientCard
                        key={i}
                        name={item.name}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Client