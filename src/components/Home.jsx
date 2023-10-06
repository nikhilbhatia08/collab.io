import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import Slides from './Slides'

function Home() {
  const us = localStorage.getItem('user');
  const user = JSON.parse(us);
  return (
    <>
<div class="bg-slate-900">
  <div class="bg-gradient-to-b from-violet-600/[.19] via-transparent">
    <div class="max-w-[85rem] mx-11 px-4 sm:px-4 lg:px-8 py-14 space-y-8">
      <div class="ml-28 max-w-5xl flex flex-row">
        <h1 class=" block font-medium text-white text-5xl sm:text-5xl md:text-6xl lg:text-7xl">
          Welcome to <span className="text-blue-600">Collab.io</span> the best way to showcase your projects.
        </h1>
        
        <img className="get_img w-0 sm:w-0 md:w-32 lg:w-48 ml-60" src={require('../pictures/problem.png')} alt="" />
      </div>

      <div class="max-w-3xl pt-5 text-center mx-auto">
        <p class="text-lg text-gray-400">Showcase your project and get hired by top companies</p>
      </div>

      <div class="text-center">
        <Link to='/getstarted' class="inline-flex items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6  focus:ring-offset-gray-800" >
          Get started
          <svg className="w-2.5 h-2.5 text-white" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </Link>
      </div>
      </div>
    </div>
    <Slides/>
    <h1 classNameName=" text-gray-200 text-4xl font-bold mx-20 pb-5">Why Collab.io ?</h1>
  </div>

<div className="max-w-[100rem] px-4 sm:px-6 lg:px-8  mx-auto">
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-3 xl:gap-6">
    <Link  to={user ? `/projects/Addproj/${user.id_p}` : `/login`} className="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all  hover:bg-white/[.075]" href="#">
      <svg className="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 mr-6  text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
      </svg>

      <div>
        <div>
          <h3 className="block font-bold text-gray-800  text-white">Add Project</h3>
          <p className="text-gray-400">Gain recognition and visibility by showcasing your projects to a wide audience.</p>
        </div>

        <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-blue-600  text-blue-500">
          Explore
          <svg className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
          </svg>
        </p>
      </div>
    </Link>
    <Link to='GetFreelance' className="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all  hover:bg-white/[.075]" href="#">
      <svg className="flex-shrink-0 w-8 h-8 text-white mt-0.5 mr-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .447.276L8.81 1h4.69A1.5 1.5 0 0 1 15 2.5V11h.5a.5.5 0 0 1 0 1h-2.86l.845 3.379a.5.5 0 0 1-.97.242L12.11 14H3.89l-.405 1.621a.5.5 0 0 1-.97-.242L3.36 12H.5a.5.5 0 0 1 0-1H1V2.5A1.5 1.5 0 0 1 2.5 1h4.691l.362-.724A.5.5 0 0 1 8 0ZM2 11h12V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V11Zm9.61 1H4.39l-.25 1h7.72l-.25-1Z"/>
      </svg>

      <div>
        <div>
          <h3 className="block font-bold text-white">Get freelance work</h3>
          <p className=" text-gray-400">Click here to embark on an exhilarating journey into the realm of freelance opportunities.</p>
        </div>

        <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-blue-600  text-blue-500">
          <Link to='GetFreelance' >Explore</Link>
          <svg className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
          </svg>
        </p>
      </div>
    </Link>
    <Link to = '/PostHack'>
    <a class="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all  hover:bg-white/[.075]" href="#">
      <svg xmlns="http://www.w3.org/2000/svg"class="w-16 h-16" data-name="Layer 1" viewBox="0 0 512 512" id="Developer"><path d="M463.03 313.678h-52.106a63.707 63.707 0 0 0-30.561-25.435l-97.02-38.22a16.41 16.41 0 0 1-10.453-15.353V218.29a104.332 104.332 0 0 0 36.477-76.542 26.924 26.924 0 0 0 23.426-26.66 21.185 21.185 0 0 0-21.16-21.159h-2.23V34.5a34.276 34.276 0 0 0-3.852-15.81 3.523 3.523 0 0 0-.159-.31A34.528 34.528 0 0 0 274.902 0h-98.744a34.539 34.539 0 0 0-34.5 34.5v59.43h-2.23a21.184 21.184 0 0 0-21.16 21.16 26.924 26.924 0 0 0 23.425 26.659 104.33 104.33 0 0 0 36.477 76.542v16.379a16.41 16.41 0 0 1-10.453 15.353l-97.02 38.22A63.139 63.139 0 0 0 30.47 347.32V508.5a3.5 3.5 0 0 0 7 0v-51.016h63.68V508.5a3.5 3.5 0 0 0 7 0v-73.174a3.5 3.5 0 1 0-7 0v15.158H37.47V347.32a56.177 56.177 0 0 1 35.793-52.563l88.79-34.979a70.977 70.977 0 0 0 126.954 0l88.79 34.979a56.698 56.698 0 0 1 24.659 18.92H301.708a18.52 18.52 0 0 0-18.5 18.5V493.5a18.52 18.52 0 0 0 18.5 18.5H463.03a18.521 18.521 0 0 0 18.5-18.5V332.178a18.521 18.521 0 0 0-18.5-18.5ZM309.402 101.5v-.57h2.23a14.177 14.177 0 0 1 14.16 14.16 19.922 19.922 0 0 1-16.39 19.582Zm-167.744 0v33.172a19.922 19.922 0 0 1-16.39-19.582 14.176 14.176 0 0 1 14.16-14.16h2.23Zm160.376-71.466a27.56 27.56 0 0 1 .368 4.466v60.465a65.454 65.454 0 0 1-14.662-14.942 64.685 64.685 0 0 1-9.232-19.276 91.397 91.397 0 0 0 13.095-13.663 91.154 91.154 0 0 0 10.431-17.05Zm-59.004 84.287a10.512 10.512 0 0 0-10.5 10.5v2.999h-14v-2.999a10.512 10.512 0 0 0-10.5-10.5h-34.05l-16.259-9.52a213.44 213.44 0 0 0 67.202-13.932 213.792 213.792 0 0 0 47.646-25.6 71.6 71.6 0 0 0 9.445 18.78 72.55 72.55 0 0 0 17.243 17.286l-22.177 12.986Zm31.5 7v16.5a3.504 3.504 0 0 1-3.5 3.5h-28a3.504 3.504 0 0 1-3.5-3.5v-13a3.504 3.504 0 0 1 3.5-3.5Zm-63 3.5v13a3.504 3.504 0 0 1-3.5 3.5h-28a3.504 3.504 0 0 1-3.5-3.5v-16.5h31.5a3.504 3.504 0 0 1 3.5 3.5Zm-62.872-27.39V34.5a27.531 27.531 0 0 1 27.5-27.5h98.744A27.51 27.51 0 0 1 298.5 20.398a84.433 84.433 0 0 1-12.428 22.395 84.453 84.453 0 0 1-13.698 13.948 206.948 206.948 0 0 1-49.955 27.59 207.028 207.028 0 0 1-73.761 13.675Zm8.493 81.343a96.75 96.75 0 0 1-8.493-39.775v-31.394l20.872 12.223v17.993a10.512 10.512 0 0 0 10.5 10.5h28a10.512 10.512 0 0 0 10.5-10.5v-3.001h14v3.001a10.512 10.512 0 0 0 10.5 10.5h28a10.512 10.512 0 0 0 10.5-10.5v-17.993l20.872-12.223V139a97.382 97.382 0 0 1-44.48 81.76 59.714 59.714 0 0 1-64.783 0 97.162 97.162 0 0 1-35.988-41.985ZM225.53 292a64.068 64.068 0 0 1-56.934-34.8l1.687-.664a23.37 23.37 0 0 0 14.887-21.866v-10.893c1.366.98 2.748 1.94 4.166 2.858a66.724 66.724 0 0 0 72.388 0c1.418-.917 2.8-1.878 4.166-2.858v10.893a23.37 23.37 0 0 0 14.887 21.866l1.688.665A64.068 64.068 0 0 1 225.53 292Zm249 201.5a11.513 11.513 0 0 1-11.5 11.5H301.708a11.513 11.513 0 0 1-11.5-11.5V355.678H474.53Zm0-144.822H290.208v-16.5a11.513 11.513 0 0 1 11.5-11.5H463.03a11.513 11.513 0 0 1 11.5 11.5Zm-60.136 101.578a3.5 3.5 0 0 0 4.251 5.562l25.54-19.52a7.5 7.5 0 0 0 0-11.918l-25.54-19.52a3.5 3.5 0 0 0-4.251 5.562l25.541 19.52a.499.499 0 0 1 0 .793Zm-79.347-118.702a3.5 3.5 0 1 0 3.5 3.5 3.5 3.5 0 0 0-3.5-3.5Zm-14 0a3.5 3.5 0 1 0 3.5 3.5 3.5 3.5 0 0 0-3.5-3.5Zm-.495 104.744 25.54 19.52a3.5 3.5 0 0 0 4.252-5.562l-25.541-19.52a.499.499 0 0 1 0-.794l25.54-19.52a3.5 3.5 0 0 0-4.25-5.563l-25.54 19.52a7.5 7.5 0 0 0 0 11.919Zm-13.505-104.744a3.5 3.5 0 1 0 3.5 3.5 3.5 3.5 0 0 0-3.5-3.5Zm59.335 129.802a3.498 3.498 0 0 0 4.715-1.507l28.766-55.813a3.5 3.5 0 0 0-6.222-3.207l-28.766 55.813a3.5 3.5 0 0 0 1.507 4.714ZM225.53 181.84a16.221 16.221 0 0 0 16.204-16.201v-5.53a3.5 3.5 0 1 0-7 0v5.53a9.204 9.204 0 0 1-18.408 0v-5.53a3.5 3.5 0 0 0-7 0v5.53a16.22 16.22 0 0 0 16.204 16.2Zm-15.718 19.306a36.94 36.94 0 0 0 15.72 3.536h.11a36.948 36.948 0 0 0 15.606-3.536 3.5 3.5 0 0 0-2.997-6.327 29.894 29.894 0 0 1-12.63 2.863h-.09a29.89 29.89 0 0 1-12.722-2.863 3.5 3.5 0 0 0-2.997 6.327Z" fill="#ffffff" class="color000000 svgShape"></path></svg>

      <div>
        <div>
          <h3 className="block font-bold ml-3 text-gray-800 text-white">Compete in Hackathons</h3>
          <p className="ml-3  text-gray-400">Get Updates on various events, hackathons and hiring challenges</p>
        </div>

        <p className="mt-3 ml-3 inline-flex items-center gap-x-2 text-sm font-semibold text-blue-600  text-blue-500">
           <Link to='Waiting'> Explore </Link>
          <svg className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
          </svg>
        </p>
      </div>
    </a>
    </Link>
    <Link to='Qa'>
    <a className="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all  hover:bg-white/[.075]" href="#">
    <svg xmlns="http://www.w3.org/2000/svg"className="w-16 h-16" viewBox="0 0 1792 1792" id="Code"><path d="m553 1399-50 50q-10 10-23 10t-23-10L-9 983q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23L160 960l393 393q10 10 10 23t-10 23zm591-1067L771 1623q-4 13-15.5 19.5T732 1645l-62-17q-13-4-19.5-15.5T648 1588l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z" fill="#ffffff" className="color000000 svgShape"></path></svg>

      <div>
        <div>
          <h3 className="block ml-3 font-bold text-white">Question and answers Forums</h3>
          <p className="ml-3 text-gray-400">Your Questions, Our Community, Endless Answers.</p>
        </div>

        <p className="mt-3 ml-3 inline-flex items-center gap-x-2 text-sm font-semibold text-blue-600  text-blue-500">
          Explore
          <svg className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
          </svg>
        </p>
      </div>
    </a>
    </Link>
  </div>
</div>
<div className="max-w-[100rem] bg-gradient-to-b from-slate-900 via-slate-900 to-violet-600/[.19]  px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="grid md:grid-cols-2 gap-12">
    <div className="lg:w-3/4">
      <h2 className="text-3xl font-bold lg:text-4xl  text-white">
        Collaborative tools to design better user experience
      </h2>
      <p className="mt-3 text-gray-400">
        We help businesses bring ideas to life in the digital world, by designing and implementing the technology tools that they need to win.
      </p>
      <p className="mt-5 inline-flex items-center gap-x-2 font-medium shadow-blue-50 text-blue-600  text-blue-500">
        Contact sales to Explore
        <svg className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
        </svg>
      </p>
    </div>

    <div className="space-y-6 lg:space-y-10">
      <div className="flex">
        <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto  bg-slate-900  border-gray-700  text-gray-200">
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
            <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
          </svg>
        </span>
        <Link to='Document'>
        <div className="ml-5 sm:ml-8">
          <h3 className="text-base sm:text-lg font-semibold text-white">
            Industry-leading documentation
          </h3>
          <p className="mt-1 text-gray-400">
            Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.
          </p>
        </div>
        </Link>
      </div>
      <div className="flex">
        <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto  bg-slate-900  border-gray-700  text-gray-200">
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
        </span>
        <div className="ml-5 sm:ml-8">
          <h3 className="text-base sm:text-lg font-semibold text-white">
            Developer community support
          </h3>
          <p className="mt-1 text-gray-400">
            We actively contribute to open-source projects—giving back to the community through development, patches, and sponsorships.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Home