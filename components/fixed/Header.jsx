import React, { useState } from 'react';
import { navlist, services } from '../../utils/constants';
import { Link, NavLink } from 'react-router-dom';
const logo = "/images/crystal logo 2.png";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { ContextUser } from '../../utils/ReusableFunctions';

const Header = () => {
  const { displayServices, navShow, setNav, service, setService } = ContextUser();

  const navClose = () => {
    setService(false)
    setNav(false)
    console.log.log('closed')
  }

  return (
    <div className='flex bg-white w-full shadow-md z-50 sticky top-0 md:py-5 py-5 px-10 md:px-24 my-auto justify-between'>
      <Link className='my-auto' to='/'><img className='md:h-8 h-5 my-auto' src={logo} alt="" /></Link>
      <div className={`flex gap-8  left-0 md:top-0 absolute bg-white md:bg-transparent duration-300 w-full md:w-fit p-6 md:p-0 md:relative capitalize ${navShow ? 'top-16' : 'top-[-1000px]'} my-auto md:flex-row flex-col text-black nvlt`}>
        <NavLink onClick={navClose} to=''>Home</NavLink>
        <div className='relative'>
          <div onClick={displayServices} className='cursor-pointer'>Our Services</div>
          <div className={`flex-col bg-light text-white shadow-sm absolute rounded-md py-4 gap-2 ${service ? 'flex' : 'hidden'}`}>
            {
              services.map((item, index) => (
                <Link
                  to={`services/${item.path}`}
                  key={index}
                  onClick={navClose}
                  className='text-base py-2 hover:bg-primary px-3 whitespace-nowrap'
                >{item.name}</Link>
              ))
            }
          </div>
        </div>
        <NavLink onClick={navClose} to='team'>Our Team</NavLink>
        <NavLink onClick={navClose} to='about'>About Us</NavLink>
        {/* <div className={`flex-col rounded-md p-3 gap-2 ${service ? 'flex' : 'hidden'}`}>
          {
            services.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                onclick={navClose}
              >{item.name}</Link>
            ))
          }
        </div> */}
      </div>
      <button className='rounded-md hidden md:flex h-fit my-auto px-6 py-3 bg-primary text-white'>Contact us</button>
      <div onClick={() => setNav(!navShow)} className='flex md:hidden my-auto text-black text-2xl'>
        {navShow ? <IoCloseSharp /> : <RiMenu3Fill />}
      </div>
    </div>
  )
}

export default Header