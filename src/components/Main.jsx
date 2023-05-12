import React from 'react'
import gamess from '../assets/Gamess.png'
import pomodoro from '../assets/pomotimer.png'
import './main.css'
import {ReactComponent as ReactLogo} from '../assets/icons/react.svg'
import{ReactComponent as HtmlLogo} from '../assets/icons/html5.svg'
import{ReactComponent as CssLogo} from '../assets/icons/css3.svg'
import{ReactComponent as JsLogo} from '../assets/icons/js.svg'
import{ReactComponent as Node} from '../assets/icons/node.svg'
import{ReactComponent as Data} from '../assets/icons/database-solid.svg'


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
          <a href="https://gamess.vercel.app/">
          <figure className='w-fit mx-5 mb-7 rounded-lg container sketchy relative'>
            <div className="relative">
              <img className='h-auto w-80 sm:w-[600px] lg:w-[800px]' src={gamess} alt="screenshot of the project" />
              <div className="absolute inset-0 flex items-center flex-col justify-center bg-bluePostit opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                <div className="text-black text-center m-5">
                  <h3 className="text-2xl font-bold mb-2">Level up your gaming experience with Gamess! Discover and explore your favorite games using the IGDB database, while Firebase ensures secure authentication and data storage. </h3>                  
                </div>
                <span className='flex gap-3'>
                  <ReactLogo className="h-12 w-12 text-black" />
                  <HtmlLogo className="h-12 w-12 text-black" />
                  <CssLogo className="h-12 w-12 text-black" />
                  <JsLogo className="h-12 w-12 text-black" />
                  <Node className="h-12 w-12 text-black" />
                  <Data className="h-12 w-12 text-black" />
                </span>
              </div>
            </div>
          </figure>
          </a>
          <div className='bg-white sm:mt-9  mt-3 mb-6 sm:mb-9 rounded-lg sketchy'>
                <h3 className='font-hand font-bold text-3xl sm:text-5xl px-4 py-2  text-black sm:px-6 sm:py-3'>POMOTIMER</h3>
          </div>
          <a href="https://pomotimertechnique.vercel.app/">
          <figure className='w-fit mx-5 mb-7 rounded-lg container sketchy relative'>
            <div className="relative">
              <img className='h-auto w-80 sm:w-[600px] lg:w-[800px]' src={pomodoro} alt="screenshot of the project" />
              <div className="absolute inset-0 flex items-center flex-col justify-center bg-yellowPostit opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                <div className="text-black text-center m-5">
                  <h3 className="text-2xl font-bold mb-2">Boost your productivity with PomoTimer! This React project empowers you to manage tasks effortlessly and stay focused using a built-in timer.</h3>                  
                </div>
                <span className='flex gap-3'>
                  <ReactLogo className="h-12 w-12 text-black" />
                  <HtmlLogo className="h-12 w-12 text-black" />
                  <CssLogo className="h-12 w-12 text-black" />
                  <JsLogo className="h-12 w-12 text-black" />
                </span>
              </div>
            </div>
          </figure>
          </a>
        </section>      
    </div>
  )




}
