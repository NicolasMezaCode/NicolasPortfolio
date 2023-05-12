import React from 'react'
import Projects from './Projects'
import './main.css'



export default function Main() {
  return (
    <div className=" bg-blend-darken bg-[url('./assets/mobile.png')]  md:bg-[url('./assets/desktop.png')] flex justify-center flex-col  items-center">
        <div className='bg-black opacity-90 rounded-lg mt-6 mb-2'>
            <h3 className='font-bold text-2xl text-white p-3 tracking-wide'>Projects</h3>
        </div>
        <section className='w-fit flex flex-col justify-center items-center'>
          <div className='bg-white sm:mt-9  mt-3 mb-6 sm:mb-9 rounded-lg sketchy'>
                <h3 className='font-hand font-bold text-3xl sm:text-5xl px-4 py-2  text-black sm:px-6 sm:py-3'>GAMESS</h3>
          </div>
        <Projects/>
        <div className='bg-black opacity-90 rounded-lg mt-6 mb-2'>
            <h3 className='font-bold text-2xl text-white p-3 tracking-wide'>About me</h3>
        </div>
        </section>      
    </div>
  )




}
