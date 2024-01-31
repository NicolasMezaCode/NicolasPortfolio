import React from 'react'
import Projects from './Projects'
import './main.css'
import About from './About'
import Education from './Education'
import Title from "./Title"
import BlogPart from './BlogPart'


export default function Main() {
  return (
    <>
      <Title/>
      <div className="relative flex justify-center flex-col items-center">
        <div className="absolute inset-0 z-0 pattern-cross pattern-gray-700 pattern-bg-white pattern-size-6 pattern-opacity-40"></div>
        <div className='bg-black opacity-90 rounded-lg mt-6 mb-6 z-20'>
            <h3 className='font-bold text-2xl text-white p-3 tracking-wide'>Projects</h3>
        </div>
        <section className='w-fit flex flex-col justify-center items-center'>
        <Projects/>
        <About/>
        <Education/>
        <div className='z-20'>
          <BlogPart/>
        </div>
     
        </section>      
      </div>
    </>
    
  )




}
