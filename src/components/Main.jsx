import React from 'react'
import gamess from '../assets/Gamess.png'
import './main.css'
export default function Main() {
  return (
    <div className='bg-tertiary-pattern md:bg-secondary-pattern flex justify-center flex-col  items-center'>
        <div className='bg-black opacity-90 rounded-lg mt-6 mb-6'>
            <h3 className='font-bold text-2xl text-white p-3 tracking-wide  '>Projects</h3>
        </div>
        <section className='w-fit flex flex-col justify-start'>
          <div className='bg-white opacity-90  mt-6 mb-9 rounded-lg sketchy'>
                <h3 className='font-hand font-bold text-4xl text-black p-3'>GAMESS</h3>
          </div>
          <figure className='w-fit  bg-black p-8 mb-10 rounded-lg container sketchy'><img className=' h-auto w-80 sm:w-[600px] lg:w-[800px]' src={gamess} alt="" /></figure>
        </section>      
    </div>
  )
}
