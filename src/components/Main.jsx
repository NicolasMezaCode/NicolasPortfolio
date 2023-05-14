import React from 'react'
import Projects from './Projects'
import './main.css'
import About from './About'



export default function Main() {
  return (
    <div className=" bg-blend-darken bg-[url('./assets/mobile.png')]  md:bg-[url('./assets/desktop.png')] flex justify-center flex-col  items-center">
        <div className='bg-black opacity-90 rounded-lg mt-6 mb-6'>
            <h3 className='font-bold text-2xl text-white p-3 tracking-wide'>Projects</h3>
        </div>
        <section className='w-fit flex flex-col justify-center items-center'>
        <Projects/>
        <About/>
        </section>      
    </div>
  )




}
