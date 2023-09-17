import React from 'react'

function Account() {
    const num = 4;
  return (
    <>
        <div className="py-4 px-8 flex justify-center flex-wrap">
            <div className="flex-col mx-auto lg:basis-1/4 sm:basis-1/2 md:basis-1/4 xs:w-full">
                <div className="rounded-full"><img className="rounded-full" src={require('../pictures/picofdev.png')} alt="" /></div>
                <div className="mt-7"><h1 className="text-white text-4xl">Name</h1></div>
                <div><h1 className="text-slate-300 text-3xl">userId</h1></div>
                <div className="py-2"><p className="text-white">Hi! Im a computer Science Enthusiast and a student</p></div>
                <div className="flex items-center"><button className="bg-blue-500 flex-1 my-2 rounded-lg py-3 px-3 text-white">Follow</button></div>
                <div className="flex items-center"><button className=" bg-purple-500 flex-1 my-2 rounded-lg py-3 px-3 text-white">Hire Me !</button></div>
                <div className="flex items-center pb-3">
                    <img className="" src={require('../pictures/user-love-2.png')} alt="" />
                    <h1 className="text-slate-300 hover:text-white">{num}  Followers</h1>
                    <h1 className="mx-2 text-slate-300 hover:text-white">{num}   following</h1>
                </div>
                <div>
                    <h1 className="pt-2 text-2xl text-white">Organizations</h1>
                    <h1 className="text-white">Name of the organizations</h1>
                </div>
            </div>
            <div className="flex-col basis-3/4 self-start border">
                
            </div>
        </div>
    </>
  )
}

export default Account