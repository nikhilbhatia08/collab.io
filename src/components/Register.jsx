import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./utils";

function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [org, setOrg] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [rollno, setRollno] = useState('');
	let handleSubmit = async(e) => {
		e.preventDefault();
		const data = {
			email: email,
			password: password,
			org: org,
			rollno: rollno,
			name: firstName + lastName
		}
		await axios.post(`${BASE_URL}/register`, data)
		.then(res => {
			if(res.status === 200) {
				alert('Registered successfully');
				window.location = '/'
			}
			else {
				localStorage.setItem('user', JSON.stringify(res.data))}});
	}
    return(
        <>
         <body class="bg-slate-800">
		<div class="container mx-auto">
			<div class="flex justify-center px-6 my-12">
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
					<div
						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">

                        <img src="https://wallpapercave.com/wp/wp7743315.jpg" alt="" />
                        </div>
					<div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
						<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
							<div class="mb-4 md:flex md:justify-between">
								<div class="mb-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
										First Name
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="firstName"
										type="text"
										placeholder="First Name"
										value={firstName}
										onChange={(e) => {setFirstName(e.target.value)}}
									/>
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
										Last Name
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="lastName"
										type="text"
										placeholder="Last Name"
										value={lastName}
										onChange={(e) => {setLastName(e.target.value)}}
									/>
								</div>
							</div>
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
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Enter rollno
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="text"
									placeholder="Enter rollno"
									value={rollno}
									onChange={(e) => {setRollno(e.target.value)}}
								/>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="text">
									Organization name
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="text"
									placeholder="Enter organisation name"
									value={org}
									onChange={(e) => {setOrg(e.target.value)}}
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
									type='submit'
								>
									Register Account
								</button>
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="#"
								>
									Forgot Password?
								</a>
							</div>
							<div class="text-center">
								<Link
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									to='/login'
								>
									Already have an account? Login!
								</Link>
							</div>
							<div class="text-center">
								<Link
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									to='/orgregister'
								>
									Organisation Registration ? Register!
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

export default Register;