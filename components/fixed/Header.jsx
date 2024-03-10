import React from 'react';
import { navlist } from '../../utils/constants';
import { Link, NavLink } from 'react-router-dom';
const logo = "/images/crystal logo 2.png";

const Header = () => {
  return (
    <div className='flex bg-white w-full shadow-md z-50 sticky top-0 md:py-5 py-5 px-10 md:px-24 my-auto justify-between'>
      <Link to='/'><img className='h-8 my-auto' src={logo} alt="" /></Link>
      <div className='flex gap-8 capitalize my-auto md:flex-row flex-col text-black nvlt'>
        {
          navlist?.map((item, i) => (
            <NavLink className='font-semibold' to={item.path} key={i}>{item.name}</NavLink>
          ))
        }
      </div>
      <button className='rounded-md h-fit my-auto px-6 py-3 bg-primary text-white'>Contact us</button>
    </div>
  )
}

export default Header