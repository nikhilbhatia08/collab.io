import React from 'react'
// import Pagination from './Pagination'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from './utils'

function Projects() {
    // const projects = [1,2,3,4,5];
    // const projectsId = 1;
    const [projects, setProjects] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const categories = [
        "Rasberry Pi",
        "Arduino",
        "IOT",
        "RF & RFID ",
        "Robotics",
        "Microcontroller",
        "Machine Learning",
        "Deep Learning",
        "Data Science",
        "Web Development",
    ]
    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };
    useEffect(() => {  
       axios.get(`${BASE_URL}/projects`)
       .then(res => {
           setProjects(res.data);
       })
         .catch(err => {
              console.log(err);
         })
    }, [])

    useEffect(() => {
        if(selectedOption === "1"){
            axios.get(`${BASE_URL}/projects`)
            .then(res => {
                setProjects(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }else{
            axios.get(`${BASE_URL}/projects/category/${selectedOption}`)
            .then(res => {
                setProjects(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
    } , [selectedOption])
  return (
    <>
        <div className="py-12 mb-64">
            <div className="mx-auto mb-4">
            <h1 className='text-3xl font-bold text-white text-center '>Projects</h1>
                <div className="flex flex-wrap items-center">
                    <div className="ml-96">
                        <div className="ml-96">
                            <div className="mx-48">
                            <select value={selectedOption} onChange={handleDropdownChange} className='mx-12 border  px-3 py-3.5  rounded-md bg-slate-800 text-white block'>
                            <option value="1">All Categories</option>
                                {
                                    categories.map((category) => {
                                        return <option value={category}>{category}</option>
                                    })
                                }
                            </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto rounded-lg border bg-slate-800 max-w-5xl px-6 lg:px-8">
            <h1 className="border-b ml-1 py-4 text-white">projects</h1>
            {projects ? (projects.map((project)=>{
                return <div>
                <div className="flex-col border-b">
                    <div className="flex flex-wrap items-center">
                        <div className="inline-block"><img className="h-16 w-16 rounded-full my-5" src={project.picture} alt="" /></div>
                        <div className="my-4 inline-block"><Link to={`/project/${project.id_p}`}><p className="mx-5 inline-block hover:text-blue-500 lg:text-3xl md:text-base sm:text-xs text-white">{project.title}</p></Link></div>
                        <Link className="mx-auto" to='/sponsor'><div className="flex shadow-[0px_22px_22px__0px_rgba(31,_41,_234,_0.4)] hover:shadow-[0px_22px_22px__0px_rgba(31,_41,_234,_0.5)] mx-auto border-blue-600 bg-blue-500 rounded-md py-1 px-1">
                            <div className="inline-block hover:scale-110"><img src={require('../pictures/heart.png')} alt="" /></div>
                            <div className="inline-block text-white mx-1">Sponsor</div>
                        </div></Link>
                    </div>
                    <div className="my-2 text-white">Category - {project.category}</div>
                </div>
                    </div>
            })): <></>}
            
            </div>
        </div>
    </>
  )
}

export default Projects