import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import { BASE_URL } from "./utils";

function Orgreg(){
	const [email , setEmail] = useState('');
	const [password , setPassword] = useState('');
	const [code , setCode] = useState('');
	const [name , setName] = useState('');
	const [address , setAddress] = useState('');
	const [file , setFile] = useState();
	let handleSubmit = async(e) => {
		e.preventDefault();
		const formdata = new FormData();
		formdata.append('email', email);
		formdata.append('password', password);
		formdata.append('id_o', code);
		formdata.append('name', name);
		formdata.append('file', file);
		formdata.append('address', address);
		console.log(formdata)
		await axios.post(`${BASE_URL}/orgregister`, formdata, { headers: {'Content-Type': 'multipart/form-data'}})
		.then(res => {
			if(res.status === 200) {
				alert('Registered successfully');
				window.location = '/login'
			}
			else {
				localStorage.setItem('user', JSON.stringify(res.data))}})
		.catch(err => {
			console.log(err);
		}
		)
	}
    return(
        <>
                   <body class="bg-slate-800">
		<div class="container mx-auto">
			<div class="flex justify-center px-6 my-12">
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
					<div
						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">

                        <img  src="https://storage.needpix.com/rsynced_images/skyscraper-1149547_1280.jpg" alt="" />
                        </div>
					<div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
						<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
						<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="InName">
								Institue Name
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="InName"
									type="text"
									placeholder="Institue Name"
									value={name}
									onChange={(e) => {setName(e.target.value)}}
								/>
							</div>
								{/* <div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
										Last Name
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="lastName"
										type="text"
										placeholder="Last Name"
									/>
								</div> */}
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Email
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Email"
									value={email}
									onChange={(e) => {setEmail(e.target.value)}}
								/>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="InName">
								Institue Address
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="InName"
									type="text"
									placeholder="Institue Address"
									value={address}
									onChange={(e) => {setAddress(e.target.value)}}
								/>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="InName">
								College code
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="InName"
									type="text"
									placeholder="Enter college code"
									value={code}
									onChange={(e) => {setCode(e.target.value)}}
								/>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="picture">
								Upload College Image
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									type="file"
									filename={file} 
									accept="image/*"
									onChange={(e) => {setFile((e.target.files[0]))}}
								/>
							</div>
							<div class="mb-4 md:flex md:justify-between">
								<div class="mb-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
										Password
									</label>
									<input
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="password"
										type="password"
										placeholder="******************"
									/>
									<p class="text-xs italic text-red-500">Please choose a password.</p>
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
										Confirm Password
									</label>
									<input
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="c_password"
										type="password"
										placeholder="******************"
										value={password}
										onChange={(e) => {setPassword(e.target.value)}}
									/>
								</div>
							</div>
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-800 focus:outline-none focus:shadow-outline"
									type="submit"
								>
									Register Account
								</button>
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<Link
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="#"
								>
									Forgot Password?
								</Link>
							</div>
							<div class="text-center">
								<Link
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									to='/login'
								>
									Already have an account? Login!
								</Link>
							</div>
							
						</form>
					</div>
				</div>
			</div>
		</div>
	 </body>
        </>
    )
}

export default Orgreg;