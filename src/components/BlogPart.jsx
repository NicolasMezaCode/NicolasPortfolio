import React from 'react'
import articles from './articles'
import { Link } from 'react-router-dom'
export default function BlogPart() {
  return (
    <div className='flex flex-col justify-center items-center mb-9 md:mb-16 px-8 sm:px-12 md:px-16'>
       <div className='bg-black opacity-90 rounded-lg w-fit  mb-6 md:mb-12'>
            <h3 className='font-bold text-2xl text-white p-3 tracking-wide'>Some of my recent Posts</h3>
        </div>
        {articles.map((article) => (
          <Link to={`/${article.id}`} key={article.id}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden containerSecond ">
              <img
                src={article.image}
                alt={article.title}
                className="object-cover w-full h-40 sm:h-56 md:h-72"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-700">{article.text}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
