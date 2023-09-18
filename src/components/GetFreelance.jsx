import React from 'react'
import { Link } from 'react-router-dom'

function Getfreelance() {
  return (
    <div class="bg-slate-750 py-10 sm:py-12">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Unlock the Door to Your <span className="text-blue-500" >Freelance Dreams</span></h2>
      <p class="mt-2 text-lg leading-8 text-gray-400">So, what are you waiting for?seize the opportunity, unleash your potential, and let your freelance journey begin with a single, electrifying choice here!</p>
    </div>
    {/* add item */}
    <div className=" flex justify-between mt-5 border p-3 rounded-md text-white">
       <h1 className="text-2xl py-2 sm: 576px">Add your Project and engage proficient freelancers to execute it </h1>
       <button className="bg-blue-500 p-2 pl-4 pr-4 rounded-md"><Link to='#'>Add</Link></button>
    </div>
    <div class="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {/* card starts from here */}
      <article class="flex max-w-xl flex-col border  p-3 rounded-md items-start justify-between">
        <div class="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" class="text-gray-500">Sep 18, 2023</time>
          <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Web Development</a>
        </div>
        <div class="group relative">
          <h3 class="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-grey-800">
            <a href="#">
              <span class="absolute inset-0"></span>
              Food Delivery space
            </a>
          </h3>
          <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 my-4">To bring this project to life, I'm looking for a freelancer with expertise in web development, particularly in creating food delivery or e-commerce websites. If you're interested and available to work on this project, please contact me through following link</p>
          <Link to='#' className='text-white' >Contact Us</Link>
        </div>
        <div class="relative mt-8 flex items-center gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-10 w-10 rounded-full bg-gray-50"/>
          <div class="text-sm leading-6">
            <p class="font-semibold text-gray-900">
              <a href="#">
                <span class="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p class="text-gray-600 my-2">Co-Founder / CTO</p>
          </div>
        </div>
      </article>

      {/* <!-- More posts... --> */}
    </div>
  </div>
</div>

  )
}

export default Getfreelance