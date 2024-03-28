import React from 'react'
import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import { BASE_URL } from './utils'
import { Audio } from 'react-loader-spinner'

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
let items = [];

let num = 0;  //to sepparate the duplicate items

function Addproj() {
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [imglink, setimglink] = useState();
    const [desc, setdesc] = useState('');
    const [Docs, setDocs] = useState();
    const [video, setvideo] = useState();
    const [arch_desc, setarch_desc] = useState('');
    const [insta, setinsta] = useState('');
    const [twitter, settwitter] = useState('');
    const [github, setgithub] = useState('');
    const [slack, setslack] = useState('');
    const [cont, setCont] = useState([]);
    const [open, setOpen] = useState(false);
    const [dummyCont, setdummyCont] = useState([]);
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

    const user = JSON.parse(localStorage.getItem('user'))._doc;
    useEffect(() => {
        axios.get(`${BASE_URL}/user/${user.id_p}/addproj`)
            .then((res)=>{
                setdummyCont(res.data);
                console.log(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    }, [])
    let handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        const formdata = new FormData();
        formdata.append('title', title);
        formdata.append('img', imglink);
        formdata.append('description', desc);
        formdata.append('video', video);
        formdata.append('Docs', Docs);
        formdata.append('arch_desc', arch_desc);
        formdata.append('insta', insta);
        formdata.append('twitter', twitter);
        formdata.append('github', github);
        formdata.append('slack', slack);
        formdata.append('contributors', JSON.stringify(items));
        formdata.append('sponsors', JSON.stringify([]));
        formdata.append('category', selectedOption);
        console.log(Docs);
        console.log(imglink);
        console.log(video);

        const response = await axios.post(`${BASE_URL}/user/${user.id_p}/addproj` , formdata, { headers: {'Content-Type': 'multipart/form-data'}});
        if(response.status === 200){
            alert("Project Added Successfully to waiting list");
            setLoading(false);
            window.location.href = `/`;
        }
        else if(response.data === 'pl'){
            setLoading(false);
            alert("Plagiarism detected");
        }
        else {
            alert("There was some error");
        }
    }
  return (
    <>
    {loading ? <div className="flex justify-center items-center h-screen w-screen bg-black bg-opacity-50 fixed z-50">
        <Audio
            type="Audio"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={0}
        />
    </div> : <></>}
    <div className="mb-10 mt-5 ">
        <div className="mx-2">
        </div>
        <div className="mt-4 flex items-center justify-center">
            <div className="flex-col bg-slate-800 border basis-3/4 rounded-md border-white">
                <div className="px-3 py-3 "><h1 className="text-white border-b text-4xl font-semibold mb-3">Add your Project</h1></div>
                <form onSubmit={handleSubmit}>
                <div className="px-3 flex felx-wrap">
                    <h1 className="text-white text-2xl">Title  : </h1>
                    <input className="mx-12 px-3 flex-1 lg:w-[500px] rounded-md bg-slate-200" value={title} onChange={(e) => {setTitle(e.target.value)}} type="text" placeholder='Add your title Here'/>
                </div>
                {/* <div className="px-3 flex mt-4 items-center">
                    <h1 className="text-white text-2xl">Enter Image of The Project  :  </h1>
                    <input value={imglink} onChange={(e)=>{setimglink(e.target.value)}} className="text-white mx-12" type="file" id="img" name="img" accept="image/*"/>
                </div> */}
                <div className="px-3 mt-4 flex felx-wrap">
                    <h1 className="text-white text-2xl mt-3">Upload your Project Image : </h1>
                    <input className="mx-12 my-2 px-3 py-3 flex-1 lg:w-[500px] rounded-md bg-slate-200" filename={imglink} accept="*" onChange={(e) => {setimglink(e.target.files[0])}} type="file" placeholder='Project Image' />
                </div>
                <div className="flex px-2 mt-4 h-10 flex-wrap">
                    <h1 className="text-white text-2xl items-start">Enter the description : </h1>
                    <input className='mx-12 flex-auto px-3 rows-3 rounded-md bg-slate-200' value={desc}  onChange={(e) => {setdesc(e.target.value)}} type="text" placeholder="Description"/>
                </div>
                <div className="px-3 mt-3 flex felx-wrap">
                    <h1 className="text-white text-2xl">Upload Project Video :  </h1>
                    <input className="mx-12 px-3 lg:w-[500px] flex-1 rounded-md bg-slate-200" filename={video} accept='*' onChange={(e) => {setvideo(e.target.files[0])}} type="file" placeholder='upload your project video'/>
                </div>
                <div className="px-3 mt-4 flex felx-wrap">
                    <h1 className="text-white text-2xl mt-3">Upload your of Project Documentation : </h1>
                    <input className="mx-12 my-2 px-3 py-3 flex-1 lg:w-[500px] rounded-md bg-slate-200" filename={Docs} type = "file" accept= "*"
									onChange={(e) => {setDocs((e.target.files[0]))}} placeholder='Project Documentation'/>
                </div>
                <div className="flex px-3 mt-4 h-10 flex-wrap">
                    <h1 className="text-white text-2xl items-start">Enter the Architecture description : </h1>
                    <input className='mx-12 flex-auto px-3 rows-3 rounded-md bg-slate-200' value={arch_desc} onChange={(e) => {setarch_desc(e.target.value)}} type="text" placeholder="Description"/>
                </div>
                <div className="flex px-3 mt-4 h-10 flex-wrap">
                <h1 className="text-white text-2xl items-start mr-32 rounded-md">Choose the Category : </h1>
                    <select value={selectedOption} onChange={handleDropdownChange} className='mx-12 flex-auto px-3 rows-3 rounded-md bg-slate-200'>
                        <option value="">Select an option</option>
                        {
                            categories.map((category) => {
                                return <option value={category}>{category}</option>
                            })
                        }
                    </select>
                </div>
                <div className="mt-10 px-3 py-3">
                    <h1 className="border-b text-white text-2xl">Add Social media accounts</h1>
                    <div className="flex-col">
                        <div className="py-2 flex items-center">
                            <h1 className='text-white text-2xl'>Instagram : </h1>
                            <input className="mx-1 px-3 lg:w-[400px] md:w-[200px] py-2 sm:w-[100px] rounded-md bg-slate-200" value={insta} onChange={(e) => {setinsta(e.target.value)}} type="text" placeholder='Enter Instagram url here'/>
                        </div>
                        <div className="py-2 flex items-center">
                            <h1 className='text-white text-2xl'>Twitter : </h1>
                            <input className="mx-1 px-3 lg:w-[400px] md:w-[200px] py-2 sm:w-[100px] rounded-md bg-slate-200" value={twitter} onChange={(e) => {settwitter(e.target.value)}} type="text" placeholder='Enter twitter url here'/>
                        </div>
                        <div className="py-2 flex items-center">
                            <h1 className=' text-white text-2xl'>Github : </h1>
                            <input className="mx-1 px-3 lg:w-[400px] md:w-[200px] py-2 sm:w-[100px] rounded-md bg-slate-200" value={github} onChange={(e) => {setgithub(e.target.value)}} type="text" placeholder='Enter github url here'/>
                        </div>
                        <div className="py-2 flex items-center">
                            <h1 className='text-white text-2xl'>Slack : </h1>
                            <input className="mx-1 px-3 lg:w-[400px] md:w-[200px] py-2 sm:w-[100px] rounded-md bg-slate-200" value={slack} onChange={(e) => {setslack(e.target.value)}} type="text" placeholder='Enter Slack url here'/>
                        </div>
                    </div>
                </div>
                <div className="mt-2 px-3 py-3">
                    <h1 className="border-b text-white text-2xl">Add Contributors</h1>
                    <div className="flex-col">
                        <div className='mt-2 flex'>
                            <h1 className='text-white text-2xl my-2'>Add Contributor : </h1>
                            <button onClick={(e)=>{e.preventDefault();setOpen(true)}} className='bg-blue-500 px-3 text-white text-2xl rounded-md ml-2'>Add Contibutors here</button>
                            <Modal
                                isOpen={open}
                                onRequestClose={() => setOpen(false)}
                                style={customStyles}
                            >
                                <div className='flex-col'>
                                    <input type="text" className='text-white text-2xl border rounded-md px-2 py-1 bg-slate-200 w-[360px]' placeholder='Search'/>
                                    <div className='flex-col'>
                                        {dummyCont.map((item, idx)=>{
                                            return <div className='mt-2 flex items-center'>
                                                <div className='w-12 h-12'>
                                                    <img className='rounded-full' src={require('../pictures/picofdev.png')} alt="" />
                                                </div>
                                                <h1 className='text-black text-2xl mx-2'>{item.name}</h1>
                                                <div className='flex-1 flex justify-end'>
                                                <button onClick={()=>{
                                                    if((num & (1 << idx + 1)) === 0){
                                                        setCont(()=>[...cont, item]);
                                                        items.push(item);
                                                        num = (num | (1 << (idx + 1)));
                                                    }
                                                }} className='bg-blue-500 px-3 w-24 text-white text-2xl rounded-md'>Add</button>
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
                    {items.map((item, idx)=>{
                        return <div className='mt-2 flex items-center'>
                        <div className='w-12 h-12'>
                            <img className='rounded-full' src={require('../pictures/picofdev.png')} alt="" />
                        </div>
                        <h1 className='text-white text-2xl mx-2'>{item.name}</h1>
                        <div className='flex-1 flex justify-end'>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            setCont(cont.filter((cont)=>cont.id !== item.id));
                            items = items.filter((cont)=>cont.id !== item.id);
                            num = (num & ~(1 << idx + 1));
                        }} className='text-white text-2xl px-3 py-1.5 rounded-md bg-red-500'>Remove</button>
                        </div>
                        </div>
                    })}
                    </div>
                    </div>
                </div>
                <div className="mt-2 px-3 py-3">
                    <h1 className="border-b text-white text-2xl mb-3">Get sponsors For You Project</h1>
                    <div>
                        <h1 className="text-white text-2xl my-2">Add Sponsorship links</h1>
                    </div>
                </div>
                <hr />
                <div class="mt-4 flex items-center justify-center">
                <button class=" bg-green-500 text-white font-bold mb-5 py-2 p-2 w-48 rounded hover:bg-blue-800" type='submit'>Add Project</button>
               </div> 
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Addproj