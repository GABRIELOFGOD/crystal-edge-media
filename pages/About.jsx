import React from 'react';
import Newsletter from '../components/Newsletter';
import ShortService from '../components/ShortService';
const aboutImage = '/images/about-image-min.jpg'

const About = () => {
  return (
    <div className=' md:py-10 py-5'>
      <div className='px-6 md:px-24'>
        <p className="text-center font-bold text-3xl py-5">We are <span className="text-primary">Crystal Edge Media</span></p>
        <div className="flex md:grid grid-cols-2 md:gap-10 gap-5 justify-between">
          <div className='my-auto'>
            <p className='text-lg'><span className="text-light font-semibold">CrystalEdge Media Limited</span> provides public relations and media relations solutions for brands, organizations, and individuals. Our mission is to elevate brands and assist organizations and individuals in garnering positive media exposure and bolstering their reputation. Through a blend of proficiency, innovation, and strategic approach, we ensure tangible outcomes for our valued clients.</p>
            <button className='bg-primary text-white py-3 px-6 rounded-md mt-10'>Get in Tourch</button>
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