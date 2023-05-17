import React from 'react'

export default function Education() {
  return (
    <div className="bg-white rounded-lg mt-6 mb-6 p-4 sketchy max-w-xs sm:max-w-md md:max-w-xl hover:bg-greenPostit transition duration-500 hover:scale-110 transition-all duration-300 ease-in-out">
      <h3 className="font-bold text-center text-2xl text-black p-3 tracking-wide">Education</h3>
      <ul className="list-disc text-lg pl-6 text-black">
        <li className="mb-2">
          <strong>Cornerstone International Community College of Canada (CICCC)</strong> - 2022-Present<br />
          <span>Diploma in Web Development</span>
        </li>
        <li className="mb-2">
          <strong>Technical University of Ambato, Ecuador</strong> - 2020-2021<br />
          <span>Bachelor in Software Engineering</span>
        </li>
        <li className="mb-2">
          <strong>Platzi</strong> - 2019-Present<br />
          <span>Certificates in Development, Marketing, Web Design, and Data Science, etc.</span>
        </li>
      </ul>
    </div>
  )
}
