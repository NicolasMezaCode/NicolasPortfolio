import React from 'react'
import gamess from '../assets/Gamess.png'
import './main.css'
export default function Main() {
  return (
    <div className="bg-[url('./assets/2.png')] md:bg-[url('./assets/output-onlinepngtools.png')] flex justify-center flex-col  items-center">
        <div className='bg-black opacity-90 rounded-lg mt-6'>
            <h3 className='font-bold text-2xl text-white p-3 tracking-wide'>Projects</h3>
        </div>
        <section className='w-fit flex flex-col justify-center items-center'>
          <div className='bg-white sm:mt-9  mt-3 mb-6 sm:mb-9 rounded-lg sketchy'>
                <h3 className='font-hand font-bold text-3xl sm:text-5xl px-4 py-2  text-black sm:px-6 sm:py-3'>GAMESS</h3>
          </div>
          <figure className='w-fit mx-5 mb-10 rounded-lg container sketchy'><img className=' h-auto w-80 sm:w-[600px] lg:w-[800px]' src={gamess} alt="screenshot of the project" /></figure>
          <div className='flex justify-center  items-center max-w-[450px] max-h-[584px] '>
            <h4 className='p-5 font-semibold sketchy bg-yellow-300 text-center mb-10'>Is a Fullstack team project using React that shows where you can find and look all your favorite games using the IGDB database and firebase for the authentication and storing the user data.</h4>
          </div>
        </section>      
    </div>
  )
}
