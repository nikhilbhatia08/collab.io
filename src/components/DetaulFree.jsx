import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "./utils";


function DetaulFree() {
    const id = useParams().id;
    const [details, setDetails] = useState(null);
    const load = async() => {
        await axios.get(`${BASE_URL}/GetFreelance/DetaulFree/${id}`)
        .then(res => {
            console.log(res.data);
            setDetails(res.data);
        }).catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        load();
    }, []);
    return(
        <>
            {details !== null ? (
                <div>
                    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/>
                    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>

                    <main class="profile-page">
                        <section class="relative block h-500-px">
                            <div class="absolute top-0 w-full h-full bg-center bg-cover">
                            <img src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80" alt="" />
                                <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
                            </div>
                            <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
                                <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                                    <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                                </svg>
                            </div>
                        </section>
                        <section class="relative py-16 bg-violet-600/[0.19]">
                            <div class="container mx-auto px-4">
                                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                                    <div class="px-6">
                                        <div class="flex flex-wrap justify-center">
                                            <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                                <div class="relative">
                                                    <img alt="" src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"/>
                                                </div>
                                            </div>
                                            <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                                <div class="py-6 px-3 mt-32 sm:mt-0">
                                                    <button class="bg-violet-600 hover:bg-violet-500 active:bg-violet-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                                        Contact us
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="w-full lg:w-4/12 px-4 lg:order-1">
                                            </div>
                                        </div>
                                        <div class="text-center mt-12">
                                            <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                                {details.name ? details.name : "Food Delivery space"}
                                            </h3>
                                            <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                                <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                                Los Angeles, California
                                            </div>
                                            <div class="mb-2 text-blueGray-600 mt-10">
                                                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Co-Founder / CTO
                                            </div>
                                        </div>
                                        <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                                            <div class="flex flex-wrap justify-center">
                                                <div class="w-full lg:w-9/12 px-4">
                                                    <div class="mb-2 text-blueGray-600">
                                                        <i class="mr-2 text-lg text-blueGray-400">Title : {details.name}</i>
                                                    </div>
                                                    <div class="mb-2 text-blueGray-600">
                                                        <i class=" mr-2 text-lg text-blueGray-400">Category : {details.category}</i>
                                                    </div>
                                                    <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                                                        {details.description}
                                                    </p>
                                                    <div class="py-6 px-3 mt-32 sm:mt-0">
                                                        <button class="bg-violet-600 hover:bg-violet-500 active:bg-violet-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                                            Contact us
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            ) : null}
        </>
    )
}

export default DetaulFree;