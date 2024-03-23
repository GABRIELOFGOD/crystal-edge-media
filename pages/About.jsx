import React from 'react';
import Newsletter from '../components/Newsletter';
import ShortService from '../components/ShortService';
import { Link } from 'react-router-dom';
const aboutImage = '/images/about-image-min.jpg'

const About = () => {
  return (
    <div className=' md:py-10 py-5'>
      <div className='px-6 md:px-24'>
        <p className="text-center font-bold text-3xl py-5">We are <span className="text-primary">Crystal Edge Media</span></p>
        <div className="flex md:grid grid-cols-2 md:gap-10 gap-5 justify-between">
          <div className='my-auto flex flex-col gap-5'>
            <p className='text-lg'><span className="text-light font-semibold">CrystalEdge Media Limited </span> provides public relations and media relations services for brands, organizations, and individuals. We elevate brands and assist organizations and individuals in garnering positive media exposure and bolster their public reputation. Through a blend of expertise, innovation, and strategic approach, we work to become the trusted partner of our valued clients and deliver tangible results for them</p>
            <Link target='blank' to='https://wa.me/2348070554185' className='bg-primary w-fit text-white py-3 px-6 rounded-md'>Get in Touch</Link>
          </div>
          <img src={aboutImage} className='w-fit hidden md:flex h-[80%] my-auto' alt="about-image" />
        </div>
      </div>
      <ShortService />
      <Newsletter />
    </div>
  )
}

export default About