import React from 'react'
import gamess from '../assets/Gamess.png'
export default function Main() {
  return (
    <div className='bg-tertiary-pattern md:bg-secondary-pattern flex justify-center flex-col  items-center'>
        <div className='bg-black opacity-90 rounded-lg mt-6 mb-6'>
            <h3 className='font-bold text-2xl text-white p-3 tracking-wide  '>Projects</h3>
        </div>
        <section className='w-fit flex flex-col justify-start'>
          <div className='bg-black opacity-90 rounded-lg mt-6 mb-6'>
                <h3 className='font-bold text-2xl text-white p-3 '>Gamess</h3>
          </div>
          <figure className='w-fit'><img className=' h-auto w-80 sm:w-[600px] lg:w-[800px]' src={gamess} alt="" /></figure>
        </section>      
    </div>
  )
}
