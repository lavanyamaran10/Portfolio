import React from 'react'
import lavanya from '../assets/Lavanya.jpg'
const Home = () => {
  return (
     <div id="home" className='w-full bg-slate-900'>
          <ul className='w-full p-20 flex flex-col lg:flex-row  gap-20 justify-center items-center text-white'>
            <li className='p-20'><h2 className='text-5xl flex-1'>Hi, I'm Lavanya Maran</h2><p className='text-2xl pt-5'>A passionate Frontend Developer</p></li>
            <li className='flex-1 flex justify-center items-center h-[250px]'>
              <div className='w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden'>
                <img src={lavanya} alt='' className='w-full h-full object-cover' />
              </div>
            </li>
          </ul>
        </div>
  )
}

export default Home
