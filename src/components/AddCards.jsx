import React from 'react'
import { useState } from 'react';
import Cards from '../components/Cards';
import axios from 'axios';
import { BASE_URL } from './utils';

function AddCards({AddCards}) {
        const[Name , setName] = useState("");
        const[Catg , setCatg] = useState("");
        const[desc , setdesc] = useState("");
        const [bud, setBud] = useState("");
        const [email, setEmail] = useState("");
        const [details, setDetails] = useState({});
  
        const submit = async(e) => {
            if((!Name || !Catg || !desc) && localStorage.getItem('user') === null) {
                alert("Please fill the blanks");
            }else{
                e.preventDefault();
                const d = JSON.parse(localStorage.getItem('user'));
                const data = {
                    email: email,
                    budget: bud,
                    name: Name,
                    category: Catg,
                    description: desc
                }
                try{
                    const response = await axios.post(`${BASE_URL}/GetFreelance/AddCards`, data);
                    console.log(response);
                }
                catch(err){
                    console.log(err);
                }
                setCatg("");
                setName("");
                setdesc("");
                setBud("");
                setEmail("");
            }
   }

    return (
        <>
            <div class="p-10 pb-40">
                <h1 class="mb-4 font-extrabold text-4xl text-white">Add Details of Your Work</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <form onSubmit={submit}>
                        <div>
                            <label class="block font-bold text-2xl text-white" for="name">Name:</label>
                            <input class="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full" value={Name} onChange={(e) => {setName(e.target.value)}} id="name" type="text" name="name" required="required" autofocus="autofocus"/>
                        </div>

                        <div class="mt-4">
                            <label class="block font-bold text-2xl text-white" for="name">Email:</label>
                            <input class="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full" value={email} onChange={(e) => {setEmail(e.target.value)}} id="diff" type="text" name="email" required="required" autofocus="autofocus"/>
                        </div>

                        <div class="mt-4">
                            <label class="block font-bold text-2xl text-white" for="email">Category:</label>
                            <input class="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full" value={Catg} onChange={(e )=> {setCatg(e.target.value)}} id="text" type="text" name="category" required="required"/>
                        </div>

                        <div class="mt-4">
                            <label class="block font-bold text-2xl text-white" for="email">Budget:</label>
                            <input class="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full" value={bud} onChange={(e )=> {setBud(e.target.value)}} id="text" type="text" name="budget" required="required"/>
                        </div>

                        <div class="mt-4">
                            <label class="block font-semibold text-2xl text-white" for="text">Description of what your project is:</label>
                            <input class="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full" value={desc} onChange={(e) => {setdesc(e.target.value)}} id="desc" type="text" name="desc" required="required" autocomplete="new-password"/>
                        </div>

                        <div class="flex items-center justify-between mt-8">
                            <button onSubmit={submit} type="submit" class="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">Upload</button>
                        </div>
                    </form>

                    <aside class="">
                        <div class="bg-gray-100 p-8 rounded">
                            <h2 class="font-bold text-2xl">Instructions</h2>
                            <ul class="list-disc mt-4 list-inside">
                                <li>clearly Describe the purpose or goal of the task..</li>
                                <li>Users must not use offensive, vulgar, or otherwise inappropriate language in any of the Fields</li>
                                <li>Clearly state what the FreeLancer needs to do or achieve.</li>
                                <li>Category -&gt; wha tech stack it uses. Eg- (Web Development , App Development etc...).</li>
                            </ul>
                        </div>
                    </aside>

                </div>
            </div>
        </>
    )
}

export default AddCards