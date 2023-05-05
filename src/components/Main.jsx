import React from 'react'
import gamess from '../assets/Gamess.png'
import './main.css'
export default function Main() {
  return (
    <div className='bg-tertiary-pattern md:bg-secondary-pattern flex justify-center flex-col  items-center'>
        <div className='bg-black opacity-90 rounded-lg mt-6'>
            <h3 className='font-bold text-2xl text-white p-3 tracking-wide'>Projects</h3>
        </div>
        <section className='w-fit flex flex-col justify-center items-center'>
          <div className='bg-white sm:mt-9  mt-3 mb-6 sm:mb-9 rounded-lg sketchy'>
                <h3 className='font-hand font-bold text-4xl sm:text-5xl px-4 py-2  text-black sm:px-6 sm:py-3'>GAMESS</h3>
          </div>
          <figure className='w-fit mx-5 mb-10 rounded-lg container sketchy'><img className=' h-auto w-80 sm:w-[600px] lg:w-[800px]' src={gamess} alt="screenshot of the project" /></figure>
          <div className='bg-postit'>
            <h4></h4>
          </div>
        </section>      
    </div>
  )
}
