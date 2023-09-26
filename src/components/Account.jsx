import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

function Account() {
    // const num = 4;
    // const id = 1; //the id will come from the url
    // const orgId = 2; //the id will come from the database
    // const name = "Nikhil Bhatia"
    // const Project = [1,2,3,4,5];
    // const category = "software";
    // const projId = 1;
    let user;
    let followers;
    let following;
    useEffect(async() => {
        const urlparams = new URLSearchParams(window.location.search);
        const userId = urlparams.get('userId');
        const response = await axios.get(`http://localhost:5050/user/${userId}`);
        const data = response.data; 
        const us = JSON.stringify(data);
        user = JSON.parse(us);
        const response1 = await axios.get(`http://localhost:5050/user/${userId}/following`);
        const data1 = response1.data;
        const us1 = JSON.stringify(data1);
        following = JSON.parse(us1);
        const res2 = await axios.get(`http://localhost:5050/user/${userId}/followers`);
        const data2 = res2.data;
        const us2 = JSON.stringify(data2);
        followers = JSON.parse(us2);
    }, [])
  return (
    <>
        <div className="py-4 px-8 flex justify-center flex-wrap">
            <div className="flex-col mx-auto lg:basis-1/4 sm:basis-1/2 md:basis-1/4 xs:w-full">
                <div className="rounded-full"><img className="rounded-full" src={require('../pictures/picofdev.png')} alt="" /></div>
                <div className="mt-7"><h1 className="text-white text-4xl">{user.name}</h1></div>
                <div><h1 className="text-slate-300 text-3xl">userId</h1></div>
                <div className="py-2"><p className="text-white">Hi! Im a computer Science Enthusiast and a student</p></div>
                <div className="flex items-center"><button className="bg-blue-500 flex-1 my-2 rounded-lg py-3 px-3 text-white">Follow</button></div>
                <div className="flex items-center"><button className=" bg-purple-500 flex-1 my-2 rounded-lg py-3 px-3 text-white">Hire Me !</button></div>
                <div className="flex items-center pb-3">
                    <img className="" src={require('../pictures/user-love-2.png')} alt="" />
                    <Link to={`/user/${user.id_p}/followers`}><h1 className="text-slate-300 hover:text-white">{followers.length}  Followers</h1></Link>
                    <Link to={`/user/${user.id_p}/following`}><h1 className="mx-2 text-slate-300 hover:text-white">{following.length}  following</h1></Link>
                </div>
                <div>
                    <h1 className="pt-2 text-2xl text-white">Organizations</h1>
                    <Link to={`/org/${user.org}`}><h1 className="text-slate-300 hover:text-white">{user.org}</h1></Link>
                </div>
            </div>
            <div className="flex-col lg:basis-3/4 mx-auto flex-1 md:basis-3/4 sm:basis-1/2 xs:w-full self-start ">
                <div className="flex-col mx-4 px-6 flex-1 rounded-md border bg-slate-900 py-2">
                    <h1 className="text-white hover:text-blue-500">{user.name}/Readme.md</h1>
                    <p className="text-white">points based on readme.md</p>
                </div>
                <div className="py-1 mt-3 px-6"><h1 className="text-white lg:text-3xl md:text-xl sm:text-xl">Projects</h1></div>
                <div className="grid lg:grid-cols-2">
                    {user.projects.map((item, idx)=>{
                        return <div className="flex-col border bg-slate-900 rounded-md mx-4 my-4 lg:min-w-[400px] xs-min-w-[300px] sm:min-w-[300px] md:min-w-[300px]">
                        <div className="mx-3 mt-3 flex">
                            <img className="" src={require('../pictures/book.png')} alt="" />
                            <Link to={`/projects/${user.projects[idx].id_p}`}><h1 className="text-white lg:text-2xl md:text-xl sm:text-xl hover:text-blue-500 px-2">Name of the project</h1></Link>
                        </div>
                        <div className="mx-3 my-4 px-2"><h1 className="text-white lg:text-2xl md:text-xl sm:text-xl">Category - {user.projects[idx]}</h1></div>
                    </div>
                    })}
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Account