import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Inproj(props) {
    const  id  = useParams();
    const imgs = ['../pictures/picofdev.png', '../pictures/problem.png'];
    const contributors = [1, 2, 4, 5, 6, 8, 9];
  return (
    <>
        <div className="py-4">
        <h1 className="text-white mx-12 lg:text-3xl md:text-base sm:text-xs">Name/Title of the project</h1>
        <div className="flex flex-wrap justify-center">
            <div className="mx-10 inline-block my-5 basis-3/4 flex-col justify-center items-center rounded-lg border bg-slate-800 max-w-4xl px-6 lg:px-8">
                <div><h1 className="text-white py-2 border-b lg:text-4xl md:text-base sm:text-xs">Readme</h1></div>
                <div className="my-4"><img className="mx-auto lg:h-96 sm:h-40 md:h-24" src={require('../pictures/picofdev.png')} alt="" /></div>
                <div><p className="text-white md:text-xs sm:text:xs lg:text-2xl">This section the contains the problem statement or the purpose of the propject</p></div>
                <div><p className="text-white md:text-xs sm:text:xs lg:text-2xl">This section contains the solution for the problem statement and the reason fro the project</p></div>
                <div><p className="text-white md:text-xs sm:text:xs lg:text-2xl inline-block">Deployment Link - </p><Link className="mx-2 text-blue-500 underline">sggsa</Link></div>
                <div><p className="text-white md:text-xs sm:text:xs lg:text-2xl inline-block">Name of the college or institution - </p><Link className="mx-2 shadow-[0px_22px_22px__0px_rgba(31,_41,_234,_0.4)] text-blue-500 underline">College Name and link</Link></div>
            </div>
            <div className="mx-10 my-5 inline-block basis-1/4 flex-col rounded-lg border bg-slate-800 px-6">
                <div className="border-b py-4">
                <div className="flex items-center"><Link to={`/projects/${id.projectId}/contributors`}><h1 className="text-white inline-block my-3 hover:text-blue-500 text-2xl">Contributors</h1></Link><p className="mx-3 text-white rounded-full bg-slate-400 px-2 border">{contributors.length}</p></div>
                {contributors.map((contributor, idx)=>{
                    return idx<4?<div className="flex-col">
                    <div className="flex my-3 items-center">
                        <div className="w-12 h-12  inline-block">
                            <img className="rounded-full inline-block" src={require('../pictures/picofdev.png')} alt="" />
                        </div>
                        <div className="inline-block"><p className="mx-4 inline-block text-white md:text:xl lg:text-2xl">Name</p></div>
                    </div>
                    </div>:<div></div>;
                })}
                <p className="text-white mx-3">+ {contributors.length - 4} contributors</p>
                </div>
            </div>
        </div>    
        </div>
    </>
  )
}

export default Inproj