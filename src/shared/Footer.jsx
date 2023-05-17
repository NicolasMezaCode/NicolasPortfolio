import React from 'react'
import{ReactComponent as Github} from '../assets/icons/github.svg'
import{ReactComponent as Linkedin} from '../assets/icons/linkedin.svg'
import{ReactComponent as Instagram} from '../assets/icons/instagram.svg'
export default function Footer() {
  return (
    <footer className="w-full bg-primary py-4">
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center space-x-4">
        <a href="" className= "opacity-80 text-white hover:opacity-100 transition-opacity">
                <Instagram className="h-auto w-6 sm:w-6 text-white" fill="white" />

        </a>
        <a href="" className="opacity-80 text-white hover:opacity-100 transition-opacity">
            <span>
                <Linkedin className="h-auto w-6 sm:w-6" fill="white" />
            </span>
        </a>
        <a href="" className="opacity-80 hover:opacity-100 transition-opacity">
            <span>
                <Github className="h-auto w-6 sm:w-6" fill="white" />
            </span>
        </a>
      </div>
      <p className="text-white text-sm mt-2">
        &copy; {new Date().getFullYear()} All rights reserved
      </p>
    </div>
  </footer>
  )
}
