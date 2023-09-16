import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
<div class="bg-slate-900">
  <div class="bg-gradient-to-b from-violet-600/[.19] via-transparent">
    <div class="max-w-[85rem] mx-11 px-4 sm:px-4 lg:px-8 py-14 space-y-8">
      <div class="ml-28 max-w-5xl flex flex-row">
        <h1 class=" block font-medium text-white text-5xl sm:text-5xl md:text-6xl lg:text-7xl">
          Welcome to Collab.io the best way to showcase your projects.
        </h1>
        
        <img className="get_img w-0 sm:w-0 md:w-32 lg:w-48 ml-60" src={require('../pictures/problem.png')} alt="" />
      </div>

      <div class="max-w-3xl pt-5 text-center mx-auto">
        <p class="text-lg text-gray-400">Showcase your project and get hired by top companies</p>
      </div>

      <div class="text-center">
        <Link to='/getstarted' class="inline-flex items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6  focus:ring-offset-gray-800" >
          Get started
          <svg class="w-2.5 h-2.5 text-white" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </Link>
      </div>
    </div>
    <h1 className=" text-gray-200 text-4xl font-bold mx-20 pb-5">Why Collab.io ?</h1>
  </div>

<div class="max-w-[100rem] px-4 sm:px-6 lg:px-8  mx-auto">
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-3 xl:gap-6">
    <a class="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all  hover:bg-white/[.075]" href="#">
      <svg class="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 mr-6  text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
      </svg>

      <div>
        <div>
          <h3 class="block font-bold text-gray-800  text-white">Get Recognition</h3>
          <p class="text-gray-400">Gain recognition and visibility by showcasing your projects to a wide audience.</p>
        </div>

        <p class="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-blue-600  text-blue-500">
          Learn more
          <svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
          </svg>
        </p>
      </div>
    </a>
    <a class="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all  hover:bg-white/[.075]" href="#">
      <svg class="flex-shrink-0 w-8 h-8 text-white mt-0.5 mr-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .447.276L8.81 1h4.69A1.5 1.5 0 0 1 15 2.5V11h.5a.5.5 0 0 1 0 1h-2.86l.845 3.379a.5.5 0 0 1-.97.242L12.11 14H3.89l-.405 1.621a.5.5 0 0 1-.97-.242L3.36 12H.5a.5.5 0 0 1 0-1H1V2.5A1.5 1.5 0 0 1 2.5 1h4.691l.362-.724A.5.5 0 0 1 8 0ZM2 11h12V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V11Zm9.61 1H4.39l-.25 1h7.72l-.25-1Z"/>
      </svg>

      <div>
        <div>
          <h3 class="block font-bold text-white">Get freelance work</h3>
          <p class=" text-gray-400">New design projects delivered to your inbox each morning.</p>
        </div>

        <p class="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-blue-600  text-blue-500">
          Learn more
          <svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
          </svg>
        </p>
      </div>
    </a>
    <a class="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all  hover:bg-white/[.075]" href="#">
      <svg class="flex-shrink-0 w-8 h-8 text-white mt-0.5 mr-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
      </svg>

      <div>
        <div>
          <h3 class="block font-bold text-gray-800  text-white">Sell your Projects</h3>
          <p class="text-gray-400">Get your products in front of thousands of potential companies  with ease.</p>
        </div>

        <p class="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-blue-600  text-blue-500">
          Learn more
          <svg class="w-2.5 h-2.5 text-white transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
          </svg>
        </p>
      </div>
    </a>
    <a class="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all  hover:bg-white/[.075]" href="#">
      <svg xmlns="http://www.w3.org/2000/svg"class="w-16 h-16" data-name="Layer 1" viewBox="0 0 512 512" id="Developer"><path d="M463.03 313.678h-52.106a63.707 63.707 0 0 0-30.561-25.435l-97.02-38.22a16.41 16.41 0 0 1-10.453-15.353V218.29a104.332 104.332 0 0 0 36.477-76.542 26.924 26.924 0 0 0 23.426-26.66 21.185 21.185 0 0 0-21.16-21.159h-2.23V34.5a34.276 34.276 0 0 0-3.852-15.81 3.523 3.523 0 0 0-.159-.31A34.528 34.528 0 0 0 274.902 0h-98.744a34.539 34.539 0 0 0-34.5 34.5v59.43h-2.23a21.184 21.184 0 0 0-21.16 21.16 26.924 26.924 0 0 0 23.425 26.659 104.33 104.33 0 0 0 36.477 76.542v16.379a16.41 16.41 0 0 1-10.453 15.353l-97.02 38.22A63.139 63.139 0 0 0 30.47 347.32V508.5a3.5 3.5 0 0 0 7 0v-51.016h63.68V508.5a3.5 3.5 0 0 0 7 0v-73.174a3.5 3.5 0 1 0-7 0v15.158H37.47V347.32a56.177 56.177 0 0 1 35.793-52.563l88.79-34.979a70.977 70.977 0 0 0 126.954 0l88.79 34.979a56.698 56.698 0 0 1 24.659 18.92H301.708a18.52 18.52 0 0 0-18.5 18.5V493.5a18.52 18.52 0 0 0 18.5 18.5H463.03a18.521 18.521 0 0 0 18.5-18.5V332.178a18.521 18.521 0 0 0-18.5-18.5ZM309.402 101.5v-.57h2.23a14.177 14.177 0 0 1 14.16 14.16 19.922 19.922 0 0 1-16.39 19.582Zm-167.744 0v33.172a19.922 19.922 0 0 1-16.39-19.582 14.176 14.176 0 0 1 14.16-14.16h2.23Zm160.376-71.466a27.56 27.56 0 0 1 .368 4.466v60.465a65.454 65.454 0 0 1-14.662-14.942 64.685 64.685 0 0 1-9.232-19.276 91.397 91.397 0 0 0 13.095-13.663 91.154 91.154 0 0 0 10.431-17.05Zm-59.004 84.287a10.512 10.512 0 0 0-10.5 10.5v2.999h-14v-2.999a10.512 10.512 0 0 0-10.5-10.5h-34.05l-16.259-9.52a213.44 213.44 0 0 0 67.202-13.932 213.792 213.792 0 0 0 47.646-25.6 71.6 71.6 0 0 0 9.445 18.78 72.55 72.55 0 0 0 17.243 17.286l-22.177 12.986Zm31.5 7v16.5a3.504 3.504 0 0 1-3.5 3.5h-28a3.504 3.504 0 0 1-3.5-3.5v-13a3.504 3.504 0 0 1 3.5-3.5Zm-63 3.5v13a3.504 3.504 0 0 1-3.5 3.5h-28a3.504 3.504 0 0 1-3.5-3.5v-16.5h31.5a3.504 3.504 0 0 1 3.5 3.5Zm-62.872-27.39V34.5a27.531 27.531 0 0 1 27.5-27.5h98.744A27.51 27.51 0 0 1 298.5 20.398a84.433 84.433 0 0 1-12.428 22.395 84.453 84.453 0 0 1-13.698 13.948 206.948 206.948 0 0 1-49.955 27.59 207.028 207.028 0 0 1-73.761 13.675Zm8.493 81.343a96.75 96.75 0 0 1-8.493-39.775v-31.394l20.872 12.223v17.993a10.512 10.512 0 0 0 10.5 10.5h28a10.512 10.512 0 0 0 10.5-10.5v-3.001h14v3.001a10.512 10.512 0 0 0 10.5 10.5h28a10.512 10.512 0 0 0 10.5-10.5v-17.993l20.872-12.223V139a97.382 97.382 0 0 1-44.48 81.76 59.714 59.714 0 0 1-64.783 0 97.162 97.162 0 0 1-35.988-41.985ZM225.53 292a64.068 64.068 0 0 1-56.934-34.8l1.687-.664a23.37 23.37 0 0 0 14.887-21.866v-10.893c1.366.98 2.748 1.94 4.166 2.858a66.724 66.724 0 0 0 72.388 0c1.418-.917 2.8-1.878 4.166-2.858v10.893a23.37 23.37 0 0 0 14.887 21.866l1.688.665A64.068 64.068 0 0 1 225.53 292Zm249 201.5a11.513 11.513 0 0 1-11.5 11.5H301.708a11.513 11.513 0 0 1-11.5-11.5V355.678H474.53Zm0-144.822H290.208v-16.5a11.513 11.513 0 0 1 11.5-11.5H463.03a11.513 11.513 0 0 1 11.5 11.5Zm-60.136 101.578a3.5 3.5 0 0 0 4.251 5.562l25.54-19.52a7.5 7.5 0 0 0 0-11.918l-25.54-19.52a3.5 3.5 0 0 0-4.251 5.562l25.541 19.52a.499.499 0 0 1 0 .793Zm-79.347-118.702a3.5 3.5 0 1 0 3.5 3.5 3.5 3.5 0 0 0-3.5-3.5Zm-14 0a3.5 3.5 0 1 0 3.5 3.5 3.5 3.5 0 0 0-3.5-3.5Zm-.495 104.744 25.54 19.52a3.5 3.5 0 0 0 4.252-5.562l-25.541-19.52a.499.499 0 0 1 0-.794l25.54-19.52a3.5 3.5 0 0 0-4.25-5.563l-25.54 19.52a7.5 7.5 0 0 0 0 11.919Zm-13.505-104.744a3.5 3.5 0 1 0 3.5 3.5 3.5 3.5 0 0 0-3.5-3.5Zm59.335 129.802a3.498 3.498 0 0 0 4.715-1.507l28.766-55.813a3.5 3.5 0 0 0-6.222-3.207l-28.766 55.813a3.5 3.5 0 0 0 1.507 4.714ZM225.53 181.84a16.221 16.221 0 0 0 16.204-16.201v-5.53a3.5 3.5 0 1 0-7 0v5.53a9.204 9.204 0 0 1-18.408 0v-5.53a3.5 3.5 0 0 0-7 0v5.53a16.22 16.22 0 0 0 16.204 16.2Zm-15.718 19.306a36.94 36.94 0 0 0 15.72 3.536h.11a36.948 36.948 0 0 0 15.606-3.536 3.5 3.5 0 0 0-2.997-6.327 29.894 29.894 0 0 1-12.63 2.863h-.09a29.89 29.89 0 0 1-12.722-2.863 3.5 3.5 0 0 0-2.997 6.327Z" fill="#ffffff" class="color000000 svgShape"></path></svg>

      <div>
        <div>
          <h3 class="block font-bold ml-3 text-gray-800 text-white">Compete in Hackathons</h3>
          <p class="ml-3  text-gray-400">Get Updates on various events, hackathons and hiring challenges</p>
        </div>

        <p class="mt-3 ml-3 inline-flex items-center gap-x-2 text-sm font-semibold text-blue-600  text-blue-500">
          Learn more
          <svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
          </svg>
        </p>
      </div>
    </a>
    <a class="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all  hover:bg-white/[.075]" href="#">
    <svg xmlns="http://www.w3.org/2000/svg"class="w-16 h-16" viewBox="0 0 1792 1792" id="Code"><path d="m553 1399-50 50q-10 10-23 10t-23-10L-9 983q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23L160 960l393 393q10 10 10 23t-10 23zm591-1067L771 1623q-4 13-15.5 19.5T732 1645l-62-17q-13-4-19.5-15.5T648 1588l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z" fill="#ffffff" class="color000000 svgShape"></path></svg>

      <div>
        <div>
          <h3 class="block ml-3 font-bold text-white">Improve your coding skills</h3>
          <p class="ml-3 text-gray-400">Get mentorship from top mentors in coding and ace coding rounds</p>
        </div>

        <p class="mt-3 ml-3 inline-flex items-center gap-x-2 text-sm font-semibold text-blue-600  text-blue-500">
          Learn more
          <svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
          </svg>
        </p>
      </div>
    </a>
  </div>
</div>
<div class="max-w-[100rem] bg-gradient-to-b from-slate-900 via-slate-900 to-violet-600/[.19]  px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="grid md:grid-cols-2 gap-12">
    <div class="lg:w-3/4">
      <h2 class="text-3xl font-bold lg:text-4xl  text-white">
        Collaborative tools to design better user experience
      </h2>
      <p class="mt-3 text-gray-400">
        We help businesses bring ideas to life in the digital world, by designing and implementing the technology tools that they need to win.
      </p>
      <p class="mt-5 inline-flex items-center gap-x-2 font-medium shadow-blue-50 text-blue-600  text-blue-500">
        Contact sales to learn more
        <svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
        </svg>
      </p>
    </div>

    <div class="space-y-6 lg:space-y-10">
      <div class="flex">
        <span class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto  bg-slate-900  border-gray-700  text-gray-200">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
            <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
          </svg>
        </span>
        <div class="ml-5 sm:ml-8">
          <h3 class="text-base sm:text-lg font-semibold text-white">
            Industry-leading documentation
          </h3>
          <p class="mt-1 text-gray-400">
            Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.
          </p>
        </div>
      </div>
      <div class="flex">
        <span class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto  bg-slate-900  border-gray-700  text-gray-200">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
        </span>
        <div class="ml-5 sm:ml-8">
          <h3 class="text-base sm:text-lg font-semibold text-white">
            Developer community support
          </h3>
          <p class="mt-1 text-gray-400">
            We actively contribute to open-source projects—giving back to the community through development, patches, and sponsorships.
          </p>
        </div>
      </div>
      <div class="flex">
        <span class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto  bg-slate-900  border-gray-700  text-gray-200">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
          </svg>
        </span>
        <div class="ml-5 sm:ml-8">
          <h3 class="text-base sm:text-lg font-semibold text-white">
            Simple and affordable
          </h3>
          <p class="mt-1 text-gray-400">
            From boarding passes to movie tickets, there's pretty much nothing you can't store with Preline.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<footer class=" bg-gradient-to-b from-violet-600/[.19] to-blue-900">
  <div class="max-w-[90rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <div class="col-span-full lg:col-span-1">
        <Link to='/' class="flex-none text-xl font-semibold text-white" aria-label="Brand">Collab.io</Link>
      </div>

      <div class="col-span-1">
        <h4 class="font-semibold text-gray-100">Product</h4>

        <div class="mt-3 grid space-y-3">
          <p><Link to='/pricing' class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200">Pricing</Link></p>
          <p><Link to='/changelog' class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200">Changelog</Link></p>
          <p><Link to='/docs' class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200">Docs</Link></p>
        </div>
      </div>

      <div class="col-span-1">
        <h4 class="font-semibold text-gray-100">Company</h4>

        <div class="mt-3 grid space-y-3">
          <p><Link to='/about' class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200">About us</Link></p>
          <p><Link to='/blogs' class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200">Blog</Link></p>
          <p><Link to='/careers' class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200">Careers</Link> <span class="inline ml-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-md">We're hiring</span></p>
          <p><Link to='/customers' class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200">Customers</Link></p>
        </div>
      </div>

      <div class="col-span-2">
        <h4 class="font-semibold text-gray-100">Stay up to date</h4>

        <form>
          <div class="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-md p-2">
            <div class="w-full">
              <label for="hero-input" class="sr-only">Search</label>
              <input type="text" id="hero-input" name="hero-input" class="py-3 px-4 block w-full border-transparent shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter your email" />
            </div>
            <Link to='/subscribe' class="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4">
              Subscribe
            </Link>
          </div>
          <p class="mt-3 text-sm text-gray-400">
            New UI kits or big discounts. Never spam.
          </p>
        </form>
      </div>
    </div>

    <div class="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
      <div class="flex justify-between items-center">
        <p class="text-sm text-gray-400">© 2023 Collab.io . All rights reserved.</p>
      </div>
      <div>
        <Link to='https://www.facebook.com/campaign/landing.php?campaign_id=15461201666&extra_1=s%7Cc%7C589521732872%7Cb%7Cfacebook%20%27%7C&placement=&creative=589521732872&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D15461201666%26adgroupid%3D130924380175%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-327195741349%26loc_physical_ms%3D9299803%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwpJWoBhA8EiwAHZFzfgXOdmlRGubPh1a3w--jopZNuX0ceNp-jc3hZLO5hEntrI8hyPLd7xoCXQMQAvD_BwE' class="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition">
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
        </Link>
        <Link to='https://www.google.co.in/?client=safari&channel=mac_bm' class="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition">
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
          </svg>
        </Link>
        <Link to='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D' class="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition">
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
          </svg>
        </Link>
        <Link to='https://github.com/nikhilbhatia08/collab.io' class="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition">
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </Link>
        <Link to='https://slack.com/intl/en-in' class="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition">
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"/>
          </svg>
        </Link>
      </div>
    </div>
  </div>
</footer>
</div>
    </>
  )
}

export default Home