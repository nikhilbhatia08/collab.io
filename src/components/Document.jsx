import React from 'react'
import { Link } from 'react-router-dom';

function Document() {
   let val=[1,2,3,4,5,6,1,2];
  return (
    <>
      <div className="p-5 px-20">
        <div className="Flex text-center text-white mx-3 my-2 py-2 px-3 w-28 text-red bg-blue-900 rounded-md">
          Featured
        </div>
        <div className="mt-10 mb-3 px-5 border-solid border-2 border-white rounded-md">
          <p className="text-white py-3">Welcome to the professional documentation page. Here, you'll find a comprehensive collection of important documents and resources to support our endeavors. We believe that access to organized and up-to-date documentation is crucial for efficient operations and seamless collaboration.</p>
        </div>       
        <hr />
        <div className=" text-center font-semibold text-white m-3 py-2 px-3 w-48 text-red bg-green-900 rounded-md">
             Software
        </div>
        <hr />
        <div className="flex flex-wrap">
        {val.map((node)=>{
          return(
        <div className="my-3 mx-3 Flexx width h-64 w-64 text-center border-solid border-2 bg-slate-800 rounded-md border-white">
           <h1 className="text-white m-2 font-bold">Use State React-JS</h1>
           <h2 className="text-white mb-2"><span className="font-semibold text-white">Source : </span> React.Dev</h2>
           <p className="text-white my-2 mb-5"> Click the link below to get directed to that documentation </p>
           <Link to='https://react.dev/reference/react/useState' className="text-blue-600 font-bold">Click Here</Link>
        </div>
         )
        })}
        </div>
        <hr />

        {/* hardware component */}
        <div className=" text-center font-semibold text-white m-3 py-2 px-3 w-48 text-red bg-green-900 rounded-md">
             Hardware
        </div>
        <hr />
        <div className="flex flex-wrap">
        {val.map((node)=>{
          return(
        <div className="my-3 mx-3  width h-64 w-64 text-center border-solid border-2 bg-slate-800 rounded-md border-white">
           <h1 className="text-white m-2 font-bold">Use State React-JS</h1>
           <h2 className="text-white mb-2"><span className="font-semibold text-white">Source : </span> React.Dev</h2>
           <p className="text-white my-2 mb-5"> Click the link below to get directed to that documentation </p>
           <Link to='https://react.dev/reference/react/useState' className="text-blue-600 font-bold">Click Here</Link>
        </div>
          )
        })}
        </div>
        <hr />
        {/* IOT */}
        <div className=" text-center font-semibold text-white m-3 py-2 px-3 w-48 text-red bg-green-900 rounded-md">
             IOT
        </div>
        <hr />
        <div className="flex flex-wrap">
        {val.map((node)=>{
          return(
        <div className="my-3 mx-3 width h-64 w-64 text-center border-solid border-2 bg-slate-800 rounded-md border-white">
           <h1 className="text-white m-2 font-bold">Use State React-JS</h1>
           <h2 className="text-white mb-2"><span className="font-semibold text-white">Source : </span> React.Dev</h2>
           <p className="text-white my-2 mb-5"> Click the link below to get directed to that documentation </p>
           <Link to='https://react.dev/reference/react/useState' className="text-blue-600 font-bold">Click Here</Link>
        </div>
         )
        })}
        </div>
      </div>
    </>
  )
}

export default Document