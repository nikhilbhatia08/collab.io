import React, { useState } from 'react'
import Cards from '../components/Cards';
import AddCards from '../components/AddCards';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import { BASE_URL } from './utils';

function Getfreelance() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState([]);
  useEffect(() => {
    axios.get(`${BASE_URL}/Getfreelance`)
    .then(res => {
      console.log(res.data);
      setDetails(res.data);
      console.log(details)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])
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
      {details.map((item)=>{
        //console.log(item)
           return(
             <>
              <Link to={`/GetFreelance/DetaulFree/${item._id}`}>
              <Cards id = {item._id} title = {item.title} name={item.name} category={item.category} Description={item.description}/> 
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