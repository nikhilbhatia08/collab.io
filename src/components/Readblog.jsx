import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./utils";

function Readblog() {
    const id = useParams().id;
    const [data, setData] = useState(null);
    const load = async() => {
        try{
            const response = await axios.get(`${BASE_URL}/forum/${id}`);
            setData(response.data);
        }catch(err) {
            console.log(err);
        }
    }
    useEffect(() => {
        load();
    }, []);
    return(
        
            data !== null ? 
        <>
          <div>

<main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-violet-600/[0.19]  antialiased">
  <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
      <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue ">
          <header class="mb-4 lg:mb-6 not-format">
              <address class="flex items-center mb-6 not-italic">
                  <div class="inline-flex items-center mr-3 text-sm text-white ">
                      <img class="mr-4 w-16 h-16 rounded-full" src="data:image/jpeg;base64,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" alt="Jese Leos"/>
                      <div>
                          <a href="#" rel="author" class="text-xl font-bold text-white ">Dr.Ramesh</a>
                          <p class="text-base text-gray-500 ">Prof. Web dev at CMRCET</p>
                          <p class="text-base text-gray-500 "><time pubdate datetime="2022-02-08" title="February 27th, 2023">Feb. 8, 2022</time></p>
                      </div>
                  </div>
              </address>
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-white lg:mb-6 lg:text-4xl ">{data.title}</h1>
          </header>
          <p class="text-gray-50">{data.description}</p>
          <section class="not-format">
              <div class="flex justify-between items-center mb-6">
                  <h2 class="text-lg lg:text-2xl font-bold text-white ">Discussion (20)</h2>
              </div>
              <form class="mb-6">
                  <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
                      <label for="comment" class="sr-only">Your comment</label>
                      <textarea id="comment" rows="6"
                          class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 "
                          placeholder="Write a comment..." required></textarea>
                  </div>
                  <button type="submit"
                      class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800">
                      Post comment
                  </button>
              </form>
              <article class="p-6 mb-6 text-base bg-white rounded-lg ">
                  <footer class="flex justify-between items-center mb-2">
                      <div class="flex items-center">
                          <p class="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 "> 
                          <img
                                  class="mr-2 w-6 h-6 rounded-full"
                                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                  alt="Michael Gough"/>Michael Gough</p>
                          <p class="text-sm text-gray-600 "><time pubdate datetime="2022-02-08"
                                  title="February 8th, 2022">Feb. 8, 2022</time></p>
                      </div>
                      <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 "
                          type="button">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                            </svg>
                          <span class="sr-only">Comment settings</span>
                      </button>
                      <div id="dropdownComment1"
                          class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow ">
                          <ul class="py-1 text-sm text-gray-700 "
                              aria-labelledby="dropdownMenuIconHorizontalButton">
                              <li>
                                  <a href="#"
                                      class="block py-2 px-4 hover:bg-gray-100 ">Edit</a>
                              </li>
                              <li>
                                  <a href="#"
                                      class="block py-2 px-4 hover:bg-gray-100 ">Remove</a>
                              </li>
                              <li>
                                  <a href="#"
                                      class="block py-2 px-4 hover:bg-gray-100 ">Report</a>
                              </li>
                          </ul>
                      </div>
                  </footer>
                  <p>Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
                      instruments for the UX designers. The knowledge of the design tools are as important as the
                      creation of the design strategy.</p>
                  <div class="flex items-center mt-4 space-x-4">
                      <button type="button"
                          class="flex items-center font-medium text-sm text-gray-500 hover:underline ">
                            <svg class="mr-1.5 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
                            </svg>
                          Reply
                      </button>
                  </div>
              </article>
              <article class="p-6 mb-6 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
                  <footer class="flex justify-between items-center mb-2">
                      <div class="flex items-center">
                          <p class="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 "><img
                                  class="mr-2 w-6 h-6 rounded-full"
                                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                  alt="Jese Leos"/>Jese Leos</p>
                          <p class="text-sm text-gray-600 d"><time pubdate datetime="2022-02-12"
                                  title="February 12th, 2022">Feb. 12, 2022</time></p>
                      </div>
                      <button id="dropdownComment2Button" data-dropdown-toggle="dropdownComment2"
                          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 "
                          type="button">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                        </svg>
                                                      <span class="sr-only">Comment settings</span>
                                                  </button>
                                                  {/* <!-- Dropdown menu --> */}
                                                  <div id="dropdownComment2"
                                                      class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                                      <ul class="py-1 text-sm text-gray-700 "
                                                          aria-labelledby="dropdownMenuIconHorizontalButton">
                                                          <li>
                                                              <a href="#"
                                                                  class="block py-2 px-4 hover:bg-gray-100 ">Edit</a>
                                                          </li>
                                                          <li>
                                                              <a href="#"
                                                                  class="block py-2 px-4 hover:bg-gray-100 ">Remove</a>
                                                          </li>
                                                          <li>
                                                              <a href="#"
                                                                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </footer>
                                              <p>Much appreciated! Glad you liked it ☺️</p>
                                              <div class="flex items-center mt-4 space-x-4">
                                                  <button type="button"
                                                      class="flex items-center font-medium text-sm text-gray-500 hover:underline ">
                                                        <svg class="mr-1.5 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                                            <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
                                                        </svg>
                                                      Reply
                                                  </button>
                                              </div>
                                          </article>
                                          <article class="p-6 mb-6 text-base bg-white border-t border-gray-200 ">
                                              <footer class="flex justify-between items-center mb-2">
                                                  <div class="flex items-center">
                                                      <p class="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 "><img
                                                              class="mr-2 w-6 h-6 rounded-full"
                                                              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                                              alt="Bonnie Green"/>Bonnie Green</p>
                                                      <p class="text-sm text-gray-600 "><time pubdate datetime="2022-03-12"
                                                              title="March 12th, 2022">Mar. 12, 2022</time></p>
                                                  </div>
                                                  <button id="dropdownComment3Button" data-dropdown-toggle="dropdownComment3"
                                                      class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 "
                                                      type="button">
                                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                        </svg>
                                                      <span class="sr-only">Comment settings</span>
                                                  </button>
                                                  {/* <!-- Dropdown menu --> */}
                                                  <div id="dropdownComment3"
                                                      class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                                      <ul class="py-1 text-sm text-gray-700 "
                                                          aria-labelledby="dropdownMenuIconHorizontalButton">
                                                          <li>
                                                              <a href="#"
                                                                  class="block py-2 px-4 hover:bg-gray-100 ">Edit</a>
                                                          </li>
                                                          <li>
                                                              <a href="#"
                                                                  class="block py-2 px-4 hover:bg-gray-100 ">Remove</a>
                                                          </li>
                                                          <li>
                                                              <a href="#"
                                                                  class="block py-2 px-4 hover:bg-gray-100 ">Report</a>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </footer>
                                              <p>The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.</p>
                                              <div class="flex items-center mt-4 space-x-4">
                                                  <button type="button"
                                                      class="flex items-center font-medium text-sm text-gray-500 hover:underline ">
                                                      <svg class="mr-1.5 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                                        <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
                                                      </svg>
                                                      Reply
                                                  </button>
                                              </div>
                                          </article>
                                          <article class="p-6 text-base bg-white border-t border-gray-200 ">
                                              <footer class="flex justify-between items-center mb-2">
                                                  <div class="flex items-center">
                                                      <p class="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 "><img
                                                              class="mr-2 w-6 h-6 rounded-full"
                                                              src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                                              alt="Helene Engels"/>Helene Engels</p>
                                                      <p class="text-sm text-gray-600 "><time pubdate datetime="2022-06-23"
                                                              title="June 23rd, 2022">Jun. 23, 2022</time></p>
                                                  </div>
                                                  <button id="dropdownComment4Button" data-dropdown-toggle="dropdownComment4"
                                                      class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                                      type="button">
                                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                        </svg>
                                                  </button>
                                                  <div id="dropdownComment4"
                                                      class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow ">
                                                      <ul class="py-1 text-sm text-gray-700 "
                                                          aria-labelledby="dropdownMenuIconHorizontalButton">
                                                          <li>
                                                              <a href="#"
                                                                  class="block py-2 px-4 hover:bg-gray-100">Edit</a>
                                                          </li>
                                                          <li>
                                                              <a href="#"
                                                                  class="block py-2 px-4 hover:bg-gray-100 ">Remove</a>
                                                          </li>
                                                          <li>
                                                              <a href="#"
                                                                  class="block py-2 px-4 hover:bg-gray-100 ">Report</a>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </footer>
                                              <p>Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.</p>
                                              <div class="flex items-center mt-4 space-x-4">
                                                  <button type="button"
                                                      class="flex items-center font-medium text-sm text-gray-500 hover:underline ">
                                                      <svg class="mr-1.5 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                                        <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
                                                      </svg>
                                                      Reply
                                                  </button>
                                              </div>
                                          </article>
                                      </section>
                                  </article>
                              </div>
                            </main>

                                          
                                      </div>
                                    </>
                                    :<></>
                                )
                            }

export default Readblog;