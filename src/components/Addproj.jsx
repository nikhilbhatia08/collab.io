import React from 'react'
import { useState } from 'react'
import Modal from 'react-modal'

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      borderRadius: "10px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      width: 400,
    },
  };

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
    }
];  //this will come from the database and will contain the details of the followers of that user
 
let items = [];

let num = 0;  //to sepparate the duplicate items

function Addproj() {
    const [imglink, setimglink] = useState('');
    const [cont, setCont] = useState([]);
    const [open, setOpen] = useState(false);
  return (
    <div className="">
        <div className="mx-2">
        </div>
        <div className="mt-4 flex items-center justify-center">
            <div className="flex-col bg-white border-4 basis-3/4 rounded-md border-white">
                <div className="px-3 py-3 "><h1 className="text-black border-b text-4xl font-semibold mb-3">Add your Project</h1></div>
                <form action="">
                <div className="px-3 flex felx-wrap">
                    <h1 className="text-black text-2xl">Title  : </h1>
                    <input className="mx-12 px-3 flex-1 lg:w-[500px] rounded-md bg-slate-200" type="text" placeholder='Add your title Here'/>
                </div>
                <div className="px-3 flex mt-4 items-center">
                    <h1 className="text-black text-2xl">Enter Image of The Project  :  </h1>
                    <input value={imglink} onChange={(e)=>{setimglink(e.target.value)}} className="text-black mx-12" type="file" id="img" name="img" accept="image/*"/>
                </div>
                <div className="flex px-2 mt-4 h-10 flex-wrap">
                    <h1 className="text-2xl items-start">Enter the description : </h1>
                    <input className='mx-12 flex-auto px-3 rows-3 rounded-md bg-slate-200' type="text" placeholder="Description"/>
                </div>
                <div className="px-3 mt-3 flex felx-wrap">
                    <h1 className="text-black text-2xl">Video url :  </h1>
                    <input className="mx-12 px-3 lg:w-[500px] flex-1 rounded-md bg-slate-200" type="text" placeholder='Enter Youtube video url here'/>
                </div>
                <div className="px-3 flex mt-4 items-center">
                    <h1 className="text-black text-2xl">Enter Image of the architecture  :  </h1>
                    <input value={imglink} onChange={(e)=>{setimglink(e.target.value)}} className="text-black mx-12" type="file" id="img" name="img" accept="image/*"/>
                </div>
                <div className="flex px-3 mt-4 h-10 flex-wrap">
                    <h1 className="text-2xl items-start">Enter the Architecture description : </h1>
                    <input className='mx-12 flex-auto px-3 rows-3 rounded-md bg-slate-200' type="text" placeholder="Description"/>
                </div>
                <div className="mt-10 px-3 py-3">
                    <h1 className="border-b text-3xl">Add Social media accounts</h1>
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
                    <h1 className="border-b text-3xl">Add Contributors</h1>
                    <div className="flex-col">
                        <div className='mt-2 flex'>
                            <h1 className='text-2xl'>Add Contributor : </h1>
                            <button onClick={(e)=>{e.preventDefault();setOpen(true)}} className='bg-blue-500 px-3 text-white rounded-md ml-2'>Add Contibutors here</button>
                            <Modal
                                isOpen={open}
                                onRequestClose={() => setOpen(false)}
                                style={customStyles}
                            >
                                <div className='flex-col'>
                                    <input type="text" className='text-black border rounded-md px-2 py-1 bg-slate-200 w-[360px]' placeholder='Search'/>
                                    <div className='flex-col'>
                                        {dummyCont.map((item, idx)=>{
                                            return <div className='mt-2 flex items-center'>
                                                <div className='w-12 h-12'>
                                                    <img className='rounded-full' src={require('../pictures/picofdev.png')} alt="" />
                                                </div>
                                                <h1 className='text-black mx-2'>{item.name}</h1>
                                                <div className='flex-1 flex justify-end'>
                                                <button onClick={()=>{
                                                    if((num & (1 << idx + 1)) === 0){
                                                        setCont(()=>[...cont, item]);
                                                        items.push(item);
                                                        num = (num | (1 << (idx + 1)));
                                                    }
                                                }} className='bg-blue-500 px-3 w-24 text-white rounded-md'>Add</button>
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex-col basis-1/4'>
                    {items.map((item)=>{
                        return <div className='mt-2 flex items-center'>
                        <div className='w-12 h-12'>
                            <img className='rounded-full' src={require('../pictures/picofdev.png')} alt="" />
                        </div>
                        <h1 className='text-black mx-2'>{item.name}</h1>
                        <div className='flex-1 flex justify-end'>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            setCont(cont.filter((cont)=>cont.id !== item.id));
                            items = items.filter((cont)=>cont.id !== item.id);
                            num = (num & ~(1 << item.id));
                        }} className='text-white px-3 py-1.5 rounded-md bg-red-500'>Remove</button>
                        </div>
                        </div>
                    })}
                    </div>
                    </div>
                </div>
                <div className="mt-2 px-3 py-3">
                    <h1 className="border-b text-3xl">Get sponsors For You Project</h1>
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