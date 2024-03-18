import React from 'react';
import ShortService from '../components/ShortService';
import Client from '../components/Client';
import Newsletter from '../components/Newsletter';
import ShortTeam from '../components/ShortTeam';
import Mission from '../components/Mission';
const hero = '/images/home-hero-min.jpg'

const Home = () => {
  return (
    <div>
      <div className=' hero items-center justify-center h-fit relative '>
        <img className='h-full' src={hero} alt="hero-img" />
        <div className='absolute top-0 left-0 w-full h-full items-center justify-center flex flex-col'>
          <p className="md:text-6xl text-3xl md:w-[1000px] w-full font-bold text-white text-center">Elevating Brands with Exceptional <span className="text-primary">Media Solutions</span></p>
          <p className="text-gray-200 w-full hidden md:flex md:w-[800px] mt-3 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis temporibus eius quia earum inventore accusantium? Accusantium voluptas maiores hic nobis laudantium iste illum, vitae aperiam.</p>
        </div>
      </div>
      <div className='py-5 md:py-10 text-xl px-6 md:px-24'>
        <p> <span className="text-primary font-semibold">Crystal Edge Media </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis excepturi, quis alias officia odit reiciendis minima eum laborum ipsum cumque illo nulla possimus placeat sequi, veritatis qui beatae eveniet mollitia repellat accusamus earum harum repudiandae. Repudiandae est iure, nihil optio nam ex sint quisquam sapiente ipsa nobis architecto voluptatem aliquam in autem maiores quaerat.</p>
        <div className="flex flex-col my-5 md:my-10 px-6 md:px-24 md:flex-row gap-5 justify-between">
          <Mission />
          {/* <Mission /> */}
        </div>
      </div>
      <ShortService />
      <ShortTeam />
      <Client />
      <Newsletter />
    </div>
  )
}

export default Home