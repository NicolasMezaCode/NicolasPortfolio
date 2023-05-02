import React from 'react'

export default function Title() {
  return (
    <section className='bg-hero-pattern flex justify-center items-center  pt-10 pb-10'>
        <div className='bg-primary rounded-sm  w-fit sm:p-10 px-2 py-4 flex justify-center items-center  flex-col '>
            <h1 className='text-3xl font-bold text-white opacity-90 tracking-wide mb-6 sm:text-4xl md:text-5xl '>Nicolas Meza</h1>
            <h2 className='font-light text-white opacity-90 text-lg text-center max-w-xs sm:text-2xl sm:max-w-sm  '>FullStack developer, passionate about technology, occasional writer.</h2>
        </div>
    </section>
   
  )
}