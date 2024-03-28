import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { BASE_URL } from './utils';


function Inproj(props) {
    const  id  = useParams();
    const imgs = ['../pictures/picofdev.png', '../pictures/problem.png'];
    const [cont, setCont] = useState([]);
    const tech = ["Javascript", "React", "Nodejs", "Express", "MongoDB", "HTML", "CSS", "TailwindCSS"];
    const [project, setProject] = useState({});
    const handleFetch = async() => {
        await axios.get(`${BASE_URL}/project/${id.projectId}`)
        .then(res => {
            console.log(res.data);
            setProject(res.data);
            setCont(res.data.contributors);
        })
        .catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        console.log(id);
        handleFetch();
    },[]);
  return (
    <>
        <div className="py-4">
        <h1 className="text-white mx-12 lg:text-3xl md:text-base sm:text-xs">{project.title} by {project.id_p}</h1>
        <div className="flex flex-wrap justify-center">
            <div className="mx-10 inline-block my-5 basis-3/4 self-start flex-col justify-center items-center rounded-lg border bg-slate-800 max-w-4xl px-6 lg:px-8">
                <div><h1 className="text-white py-2 border-b lg:text-4xl md:text-base sm:text-xs">Readme</h1></div>
                <div className="border-b pb-4">
                <div className="my-4"><img className="mx-auto self-start lg:h-96 sm:h-40 md:h-24" src={project.picture} alt="" /></div>
                <div><p className="text-white md:text-xs sm:text:xs lg:text-2xl">{project.statement}</p></div>
                <div><p className="text-white md:text-xs sm:text:xs lg:text-2xl">{project.description}</p></div>
                <div><p className="text-white md:text-xs sm:text:xs lg:text-2xl inline-block">Deployment Link - </p><Link className="mx-2 text-blue-500 underline">sggsa</Link></div>
                <div><p className="text-white md:text-xs sm:text:xs lg:text-2xl inline-block">Name of the college or institution - </p><Link className="mx-2 shadow-[0px_22px_22px__0px_rgba(31,_41,_234,_0.4)] text-blue-500 underline">{project.org}</Link></div>
                </div>
                <div className="py-4 flex-col border-b">
                    <div className=""><h1 className="text-white sm:text-xs md:text-xs lg:text-4xl">Video</h1></div>
                    <video width="750" height="300" controls autoplay>
                        <source src={project.video_url} type="video/mp4"/>
                    </video>
                </div>
                {
                        project.decumentation ? 
                    <div className="py-4 flex-col border-b">
                        <div className=""><h1 className="text-white sm:text-xs md:text-xs lg:text-4xl">Documents</h1></div>
                        <Link class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" to = {project.decumentation}>Click Here</Link>
                    </div>
                    :
                    <>
                    </>
                }
                <div className="py-4 flex-col border-b">
                    <div className=""><p className="text-4xl text-white">Architecture</p></div>
                    {/* <div className="my-4"><img className="mx-auto self-start lg:h-96 sm:h-40 md:h-24" src={require('../pictures/picofdev.png')} alt="" /></div> */}
                    <div><p className="text-white">This will contain explaination about hte architecture and working od the project</p></div>
                </div>
                <div className="py-4 flex-col border-b">
                    <div className=""><p className="text-4xl text-white">Liked Our work ? Would You Like to sponsor Us</p></div>
                    <h1 className="text-white">Links of Sponsoring us will come here</h1>
                </div>
                <div className="py-4 flex-col border-b">
                    <div className=""><p className="text-4xl text-white">Follow Us</p></div>
                    <h1 className="text-white">=Link of Social media handle will come here</h1>
                </div>
            </div>
            <div className="mx-10 my-5 inline-block self-start basis-1/4 flex-col rounded-lg border bg-slate-800 px-6">
                <div className="border-b py-4">
                <div className="flex items-center"><Link to={`/projects/${id.projectId}/insights/${1}`}><h1 className="text-white inline-block my-3 hover:text-blue-500 text-2xl">Contributors</h1></Link><p className="mx-3 text-white rounded-full bg-slate-400 px-2 border">{cont.length}</p></div>
                {cont.map((contributor, idx)=>{
                    if(typeof contributor === 'object')
                    return idx<4?<div className="flex-col">
                    <div className="flex my-3 items-center">
                        <div className="w-12 h-12  inline-block">
                            <img className="rounded-full inline-block" src={require('../pictures/picofdev.png')} alt="" />
                        </div>
                        <Link to={`/user/${contributor.id}`}><div className="inline-block"><p className="mx-4 hover:text-blue-500 inline-block text-white md:text:xl lg:text-2xl">{contributor.id}</p></div></Link>
                    </div>
                    </div>:<div></div>;
                    else return null;
                })}
                <Link to={`/projects/${id.projectId}/contributors`}><p className="text-white mx-3 hover:text-blue-500">+ {cont.length - 4} contributors</p></Link>
                </div>
                <div className="flex-col pb-5 border-b">
                    <h1 className="text-white text-2xl my-3">Tech Stack</h1>
                    <div className="flex flex-wrap">
                    {tech.map((tech, idx)=>{
                        return <h1 className="text-white mx-2">{tech}</h1>
                    })}
                    </div>
                </div>
                <div className="flex-col pb-5">
                    <Link to={`/projects/${id.projectId}/sponsorors`}><h1 className="text-white text-2xl hover:text-blue-500 my-3">Sponsored By</h1></Link>
                    {cont.map((contributor, idx) => {
                        if (typeof contributor === 'object') {
                            if (idx < 4) {
                                return (
                                    <div className="flex-col">
                                        <div className="flex my-3 items-center">
                                            <div className="w-12 h-12 inline-block">
                                                <img className="rounded-full inline-block" src={require('../pictures/picofdev.png')} alt="" />
                                            </div>
                                            <Link to={`/user/${idx}`}>
                                                <div className="inline-block">
                                                    <p className="mx-4 inline-block hover:text-blue-500 text-white md:text-xl lg:text-2xl">Name</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        } else {
                            return null;
                        }
                    })}
                    <Link to={`/projects/${id.projectId}/contributors`}>
                        <p className="text-white mx-3 hover:text-blue-500">+ {cont.length - 4} sponsorors</p>
                    </Link>
                    </div>
                    </div>
                    </div>
        </div>
    </>
  )
}

export default Inproj