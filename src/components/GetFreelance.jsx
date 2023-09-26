import React, { useState } from 'react'
import Cards from '../components/Cards';
import AddCards from '../components/AddCards';
import { Link } from 'react-router-dom'

function Getfreelance() {
 
  const details=[{
    Name : "Food Delivery space",
    category : "Web Development",
    Description : "To bring this project to life, I'm looking for a freelancer with expertise in web development, particularly in creating food delivery or e-commerce websites. If you're interested and available to work on this project, please contact me through following link"
    },
   {
    Name : "Food Delivery space",
    category : "Web Development",
    Description : "To bring this project to life, I'm looking for a freelancer with expertise in web development, particularly in creating food delivery or e-commerce websites. If you're interested and available to work on this project, please contact me through following link"
   },
   {
    Name : "Food Delivery space",
    category : "Web Development",
    Description : "To bring this project to life, I'm looking for a freelancer with expertise in web development, particularly in creating food delivery or e-commerce websites. If you're interested and available to work on this project, please contact me through following link"
  }
]
  return (
    <div class="bg-slate-750 py-10 sm:py-12">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Unlock the Door to Your <span className="text-blue-500" >Freelance Dreams</span></h2>
      <p class="mt-2 text-lg leading-8 text-gray-50">So, what are you waiting for?seize the opportunity, unleash your potential, and let your freelance journey begin with a single, electrifying choice here!</p>
    </div>
    {/* add item */}
    <div className=" flex justify-between mt-5 border p-3 rounded-md text-white">
       <h1 className="text-2xl md:text-xl mt-2">Add your Project and engage proficient freelancers to execute it </h1>
       <button className="bg-blue-500 p-2 pl-4 pr-4 rounded-md allign-left"><Link to='AddCards'>Add</Link></button>
    </div>
    <div class="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"> 

      {/* card starts from here */}
      {/* <AddCards details={details}/> */}
      {details.map((node)=>{
           return(
             <>
              <Link to='DetaulFree'>
              <Cards Name={node.Name} category={node.category} Description={node.Description}/> 
              </Link>
             </>
           )
        })} 
      {/* <!-- More posts... --> */}
    </div>
  </div>
</div>

  )
}

export default Getfreelance