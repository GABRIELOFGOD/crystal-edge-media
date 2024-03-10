import React from 'react';
const newletterImg = '/images/newsletter.png'

const Newsletter = () => {
  return (
    <div className='flex gap-10 mx-6 md:mx-24 py-10 bg-orange-100 rounded-md px-6 md:px-20 justify-between'>
        <div className='w-full my-auto md:pr-12 md:w-[65%]'>
            <p className="text-4xl font-bold">Subscribe to our <span className="text-light">NEWSLETTER</span></p>
            <p className='text-gray-600 mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, deleniti tempore consectetur deserunt pariatur blanditiis ratione aspernatur itaque eveniet nobis?</p>
            <form onSubmit={e => e.preventDefault()} className='flex relative mt-5'>
                <input placeholder='Enter Your Email Here...' className='h-12 pl-6 pr-6 md:pr-32 outline-none w-full rounded-[30px] border-2 border-light bg-transparent' type="text" />
                <button className='bg-primary absolute text-white h-10 right-1 top-1 px-6 rounded-[30px]'>Subscribe</button>
            </form>
        </div>
        <div className='md:flex hidden my-auto relative md:w-[35%]'>
            <img className='w-full' src={newletterImg} alt="newsletter-image" />
        </div>
    </div>
  )
}

export default Newsletter