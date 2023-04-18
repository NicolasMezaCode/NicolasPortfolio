import React from 'react'

export default function Header() {
  return (
    <header className='w-full'>
        <div className='bg-primary h-16 flex justify-around items-center px-[5vw]'>
            <div className='flex justify-center items-center'>
          <a href="" className='p-2 sm:3'><h3 className='text-base sm:text-lg font-bold text-white tracking-widest opacity-80 hover:opacity-100 hover:transition-colorings'>Nicolas Meza</h3></a>
                <ul className='text-white hidden sm:flex flex-row justify-end items-center  text-xs font-medium font-primary '>
                    <li className=' mt-1 block m-0 p-0' ><a className=' p-3 relative block text-letter opacity-80 transition-colorings hover:no-underline hover:opacity-100 before:content-[""] before:absolute before:right-full before:bottom-2 before:left-3 before:h-[1px] before:bg-letter before:opacity-25 before:transition-line hover:before:right-3 hover:before:opacity-50'  href="">HOME</a></li>
                    <li className='mt-1 block m-0 p-0  ' ><a className='p-3 relative block text-letter opacity-80 transition-colorings hover:no-underline hover:opacity-100 before:content-[""] before:absolute before:right-full before:bottom-2 before:left-3 before:h-[1px] before:bg-letter before:opacity-25 before:transition-line hover:before:right-3 hover:before:opacity-50'  href="">ABOUT ME</a></li>
                </ul>
            </div>
            <div>
                <ul className='text-white flex flex-row justify-center text-xs font-medium'>
                    <li className='mt-1 block m-0 p-0   ' ><a className='p-2 sm:p-3 relative block text-letter opacity-80 transition-colorings hover:no-underline hover:opacity-100 before:content-[""] before:absolute before:right-full before:bottom-2 before:left-3 before:h-[1px] before:bg-letter before:opacity-25 before:transition-line hover:before:right-3 hover:before:opacity-50 ' href="">BLOG</a></li>
                    <li className='mt-1 block m-0 p-0   ' ><a className='p-2 sm:p-3 relative block text-letter opacity-80 transition-colorings hover:no-underline hover:opacity-100 before:content-[""] before:absolute before:right-full before:bottom-2 before:left-3 before:h-[1px] before:bg-letter before:opacity-25 before:transition-line hover:before:right-3 hover:before:opacity-50 ' href="">CONTACT</a></li>
                    <li className='mt-1 block m-0 p-0   ' ><a className='p-2 sm:p-3 relative block text-letter opacity-80 transition-colorings hover:no-underline hover:opacity-100 before:content-[""] before:absolute before:right-full before:bottom-2 before:left-3 before:h-[1px] before:bg-letter before:opacity-25 before:transition-line hover:before:right-3 hover:before:opacity-50 ' href="">PROJECTS</a></li>
                </ul>
            </div>
        </div>
    </header>
  )
}
