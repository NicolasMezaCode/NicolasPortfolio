import React from 'react'
import image1 from '../assets/images/DALL·E 2023-05-26 11.39.09 - old dj  equipment and vintage music stuff (1).webp'
import { Link } from 'react-router-dom';
import  articles  from './articles';
import './main.css'
export default function Blog() {
  return (
    <section className="w-full min-h-screen p-8 bg-background">
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-white text-4xl font-bold mb-4 sm:mb-8 md:mb-16">Blog</h1>

      <div className="max-w-4xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-4 sm:px-8 md:px-16">
        {articles.map((article) => (
          <Link to={`/${article.id}`} key={article.id}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden containerSecond ">
              <img
                src={article.image}
                alt={article.title}
                className="object-cover w-full h-40 sm:h-56"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-700">{article.text}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
  )
}
