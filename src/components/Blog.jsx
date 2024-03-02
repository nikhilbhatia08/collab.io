import { Link } from "react-router-dom";
import axios from "axios";
import React, {useState, useEffect} from "react";
import { BASE_URL } from "./utils";

function Blog() {
    const arr=[1,2,3,4,5];
    const [array, setArray] = useState([]);
    const load = async() => {
        await axios.get(`${BASE_URL}/forum`)
        .then(res => {
            console.log(res.data);
            setArray(res.data);
        }).catch(err => {
            console.log(err);
        })
    
    }
    useEffect(() => {
        load();
    }, [])
    return(
        <div>
              <section class="bg-violet-600/[0.19] px-5 py-5 ">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 class="grid gap-8 lg:grid-cols-1 mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-blue-600">Our Blog</h2>
          <p class="font-light text-gray-100 sm:text-xl">Your Questions answered Here.</p>
      </div> 
      <div class="grid h-[800px] gap-8 overflow-auto lg:grid-cols-1">
        {array.map((node)=>{
            return(
            <>
          <article class="p-6 bg-white h-80 rounded-lg border border-gray-200 shadow-md ">
              <div class="flex justify-between items-center mb-5 text-gray-500">
                 <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
                      <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                      Article
                  </span>
                  <span class="text-sm">14 days ago</span>
              </div>
              <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 "><a href="#">{node.title}</a></h2>
              <p class="mb-5 font-light text-gray-500 ">{node.description}</p>
              <div class="flex justify-between items-center">
                  {/* <div class="flex items-center space-x-4">
                      <img class="w-7 h-7 rounded-full" src="https://media.istockphoto.com/id/1329365304/photo/student-working-on-pcb-board-in-lab-for-project-in-electronic-engineering.jpg?s=612x612&w=0&k=20&c=RcL14PacS6n_S01n0AzKvdd53yKR8wIOlr9FW4vAxqM=" alt="Jese Leos avatar" />
                      <span class="font-medium ">
                          srinu
                      </span>
                  </div> */}
                  <Link to={`/Blog/Readblog/${node.query_id}`} class="inline-flex items-center font-medium text-primary-600  hover:underline">
                      Read more
                      <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </Link>
              </div>
          </article> 
          {/* <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md ">
              <div class="flex justify-between items-center mb-5 text-gray-500">
                  <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
                      <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                      Article
                  </span>
                  <span class="text-sm">14 days ago</span>
              </div>
              <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 "><a href="#">Our first project with React</a></h2>
              <p class="mb-5 font-light text-gray-500 ">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>
              <div class="flex justify-between items-center">
                  <div class="flex items-center space-x-4">
                      <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" />
                      <span class="font-medium ">
                          Bonnie Green
                      </span>
                  </div>
                  <a href="#" class="inline-flex items-center font-medium text-primary-600  hover:underline">
                      Read more
                      <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div>
          </article>  */}
          </>
          )
        })}                 
      </div>  
  </div>
</section>
        </div>
    )
}

export default Blog;