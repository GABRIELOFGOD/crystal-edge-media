import React, { useState } from 'react';
import { navlist } from '../../utils/constants';
import { Link, NavLink } from 'react-router-dom';
const logo = "/images/crystal logo 2.png";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [navShow, setNav] = useState(false)

  return (
    <div className='flex bg-white w-full shadow-md z-50 sticky top-0 md:py-5 py-5 px-10 md:px-24 my-auto justify-between'>
      <Link to='/'><img className='md:h-8 h-5 my-auto' src={logo} alt="" /></Link>
      <div className={`flex gap-8  left-0 md:top-0 absolute bg-white md:bg-transparent duration-300 w-full md:w-fit p-6 md:p-0 md:relative capitalize ${navShow ? 'top-16' : 'top-[-1000px]'} my-auto md:flex-row flex-col text-black nvlt`}>
        {
          navlist?.map((item, i) => (
            <NavLink className='font-semibold' to={item.path} key={i}>{item.name}</NavLink>
          ))
        }
      </div>
      <button className='rounded-md hidden md:flex h-fit my-auto px-6 py-3 bg-primary text-white'>Contact us</button>
      <div onClick={() => setNav(!navShow)} className='flex md:hidden my-auto text-black text-3xl'>
        {navShow ? <IoCloseSharp /> : <RiMenu3Fill />}
      </div>
    </div>
  )
}

export default Header