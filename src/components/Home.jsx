import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
<div class="bg-slate-900">
  <div class="bg-gradient-to-b from-violet-600/[.15] via-transparent">
    <div class="max-w-[85rem] mx-11 px-4 sm:px-4 lg:px-8 py-24 space-y-8">
      <div class="ml-16 max-w-2xl grid md:grid-cols-2 xl:gap-20 md:items-center">
        <h1 class="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-13xl">
          Welcome to Collab.io the best way to showcase your projects.
        </h1>
        <img className="ml-56 max-w-[35rem]" src={require('../pictures/projects1.jpg.avif')} alt="" />
        
      </div>

      <div class="max-w-3xl text-center mx-auto">
        <p class="text-lg text-gray-400">Showcase your project and get hired by top companies</p>
      </div>

      <div class="text-center mx-auto">
        <a class="inline-flex items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800" href="#">
          Get started
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Home