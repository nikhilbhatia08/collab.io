import React from 'react'
import { Link } from 'react-router-dom';

function Contributors(props) {
    const GET_ID = props.id_p; //to get the contributors of this project
    const dummyCont = [
        {
            name: "Nikhil Bhatia",
            id: 1,    
        },
        {
            name: "Vignesh",
            id:2,
        },
        {
            name: "Varun", 
            id: 3,
        },
        {
            name: "Varun", 
            id: 3,
        },
        {
            name: "Varun", 
            id: 3,
        },
    ];   //the contributors should come from the database
  return (
    <>
    <aside>
        <div className='flex-col border  rounded-md bg-slate-800'>
            <div className='px-3 pt-3'>
                <h1 className="text-white text-4xl pb-1 border-b">Contributors</h1>
            </div>
            <div className='px-3'>
            {dummyCont.map((item)=>{
                return <div className='flex items-center px-3 py-3 border-b'>
                    <div className='w-12 h-12'>
                        <img className='rounded-full' src={require('../pictures/picofdev.png')} alt="" />
                    </div>
                    <Link to={`/user/${item.id}`}><h1 className='text-white hover:text-blue-500 mx-2'>{item.name}</h1></Link>
                </div>
            })}
            </div>

        </div>
    </aside>
    </>
  )
}

export default Contributors