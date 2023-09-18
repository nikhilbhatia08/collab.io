import React from 'react'
import { useState } from 'react'

function Addproj() {
    const [imglink, setimglink] = useState('');
    const [cont, setCont] = useState([]);
  return (
    <div className="">
        <div className="mx-10">
            <h1 className='text-white text-4xl'>Add your Project</h1>
        </div>
        <div className="mt-10 flex items-center justify-center">
            <div className="flex-col bg-white border-4 basis-3/4 rounded-md border-white">
                <div className="px-3 py-3"><h1 className="text-black border-b text-4xl">Readme</h1></div>
                <form action="">
                <div className="px-3 flex felx-wrap">
                    <h1 className="text-black text-3xl">Title  : </h1>
                    <input className="mx-12 px-3 flex-1 lg:w-[500px] rounded-md bg-slate-200" type="text" placeholder='Add your title Here'/>
                </div>
                <div className="px-3 flex mt-4 items-center">
                    <h1 className="text-black text-3xl">Enter Image of The Project  :  </h1>
                    <input value={imglink} onChange={(e)=>{setimglink(e.target.value)}} className="text-black mx-12" type="file" id="img" name="img" accept="image/*"/>
                </div>
                <div className="flex px-3 mt-4 h-20 flex-wrap">
                    <h1 className="text-3xl items-start">Enter the description : </h1>
                    <input className='mx-12 flex-auto px-3 rows-3 rounded-md bg-slate-200' type="text" placeholder="Description"/>
                </div>
                <div className="px-3 mt-3 flex felx-wrap">
                    <h1 className="text-black text-3xl">Video url :  </h1>
                    <input className="mx-12 px-3 lg:w-[500px] flex-1 rounded-md bg-slate-200" type="text" placeholder='Enter Youtube video url here'/>
                </div>
                <div className="px-3 flex mt-4 items-center">
                    <h1 className="text-black text-3xl">Enter Image of the architecture  :  </h1>
                    <input value={imglink} onChange={(e)=>{setimglink(e.target.value)}} className="text-black mx-12" type="file" id="img" name="img" accept="image/*"/>
                </div>
                <div className="flex px-3 mt-4 h-20 flex-wrap">
                    <h1 className="text-3xl items-start">Enter the Architecture description : </h1>
                    <input className='mx-12 flex-auto px-3 rows-3 rounded-md bg-slate-200' type="text" placeholder="Description"/>
                </div>
                <div className="mt-10 px-3 py-3">
                    <h1 className="border-b text-4xl">Add Social media accounts</h1>
                    <div className="flex-col">
                        <div className="py-2 flex items-center">
                            <h1 className='text-2xl'>Instagram : </h1>
                            <input className="mx-1 px-3 lg:w-[400px] md:w-[200px] py-2 sm:w-[100px] rounded-md bg-slate-200" type="text" placeholder='Enter Youtube video url here'/>
                        </div>
                        <div className="py-2 flex items-center">
                            <h1 className='text-2xl'>Twitter : </h1>
                            <input className="mx-1 px-3 lg:w-[400px] md:w-[200px] py-2 sm:w-[100px] rounded-md bg-slate-200" type="text" placeholder='Enter Youtube video url here'/>
                        </div>
                        <div className="py-2 flex items-center">
                            <h1 className='text-2xl'>Github : </h1>
                            <input className="mx-1 px-3 lg:w-[400px] md:w-[200px] py-2 sm:w-[100px] rounded-md bg-slate-200" type="text" placeholder='Enter Youtube video url here'/>
                        </div>
                        <div className="py-2 flex items-center">
                            <h1 className='text-2xl'>Slack : </h1>
                            <input className="mx-1 px-3 lg:w-[400px] md:w-[200px] py-2 sm:w-[100px] rounded-md bg-slate-200" type="text" placeholder='Enter Youtube video url here'/>
                        </div>
                    </div>
                </div>
                <div className="mt-2 px-3 py-3">
                    <h1 className="border-b text-4xl">Add Contributors</h1>
                    <div className="flex-col">
                        <div className='mt-2 flex'>
                            <h1 className='text-2xl'>Add Contributor : </h1>
                            <button className='bg-blue-500 px-3 text-white rounded-md ml-2'>Add Contibutors here</button>
                        </div>
                    </div>
                </div>
                <div className="mt-2 px-3 py-3">
                    <h1 className="border-b text-4xl">Get sponsors For You Project</h1>
                    <div>
                        <h1>Add Sponsorship links</h1>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Addproj