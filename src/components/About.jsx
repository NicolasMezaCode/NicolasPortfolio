import React from 'react'
import photo from '../assets/final_Original (2) (1).jpg'
import './about.css'
export default function About() {
  return (
    <>
        <div id='about' className='bg-black opacity-90 rounded-lg  mb-6 md:mb-9'>
            <h3 className='font-bold text-2xl text-white p-3 tracking-wide'>Who am I?</h3>
        </div>
        <div className='flex justify-center items-center flex-col md:flex-row gap-4'>
            <span className='sketchy container max-w-xs sm:max-w-md md:max-w-lg bg-white opacity-90  md:mb-6'>
                <p className='m-3 md:m-6 text-center text-xs sm:text-lg sm:font-medium opacity-100 '>
                    I'm Ecuadorian by birth , currently I am living on Vancouver, Canada. Ever since I can remember, the internet culture has been my jam.
                    Fast forward to now, and I'm all about the frontend development scene.I dig the backend too, but I've come to realize that nailing the user experience is what truly matters in the web scene. I'm a firm believer in having a solid concept that gets people excited about the products. That's my philosophy as a developer.
                </p>
            </span>
            <figure className='mb-6 md:mb-9 mt-3'>
                <img className='sketchyPhoto h-auto w-64 md:w-80 relative' src={photo} alt="" />
            </figure>
        </div>
        <a href='/contact' className='rainbow sketchy container w-fit font-hand font-semibold text-4xl tracking-widest  md:my-10'><h3 className='p-3 md:p-5'>Contact Me</h3></a>
    </>
  )
}
