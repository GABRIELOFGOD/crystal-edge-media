import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  const currentPath = window.location.pathname
  
  return (
    <div className='md:my-20 my-10'>
        <p className="text-center font-bold text-6xl text-gray-400">404 PAGE NOT FOUND</p>
        <p className="text-center text-gray-700">This page <span className='font-bold text-neutral-800'>{currentPath}</span> is not found. Go back <Link to='/' className="text-primary mt-5 font-bold">HOME</Link></p>
    </div>
  )
}

export default NotFound