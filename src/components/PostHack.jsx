import React from 'react';
import { Link } from 'react-router-dom'
import Cards11 from './Cards11';

const PostHack = () => {
    const details=[{
        Name : "Specathon",
        category : "Hack-A-Thon",
        Description : "Join us in 36 Hour Hack-a-thon",
         college : "St. Peters College",
         url : "http://www.aiming.in/wp-content/uploads/2014/07/stpeters-engineering-college-hyderabad.jpg"
        },
       {
        Name : "Winter Code",
        category : "Code-A-Thon",
        Description : "Unleash Your Inner Coder: Winter Code is Calling",
        college : "VNR Vignan Jyothi College",
        url : "https://tse4.mm.bing.net/th?id=OIP.-kgCRxNB8nYajPxynvXGXgAAAA&pid=Api&P=0&h=180"
       },
       {
        Name : "Hash it Out",
        category : "Hack-A-Thon",
        Description : "Innovate, Collaborate, Create: Hash it out is Here!",
        college : "Sreenidhi College",
        url : "https://tse3.mm.bing.net/th?id=OIP.SyZcH_f7Bj35QTwrvKYODQHaC1&pid=Api&P=0&h=180"
      }
    ]

    return(
        <div class="bg-slate-750 py-10 sm:py-12">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Unlock the Door to </h2>
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl"><span className="text-blue-500" >Compete in Hack-A-Thons</span></h2>
      <p class="mt-2 text-lg leading-8 text-gray-50">Welcome to our webpage! We are here to witness and support the talented individuals competing in hackathons.</p>
    </div>
    <div class="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"> 

      {/* card starts from here */}
      {/* <AddCards details={details}/> */}
      {details.map((node)=>{
           return(
             <>
              <Link to='DetaulFree'>
              <Cards11 Name={node.Name} category={node.category} Description={node.Description} college = {node.college} url={node.url}/> 
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

export default PostHack;