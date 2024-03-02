import React from 'react';
import { Link } from 'react-router-dom';

function Cards({name, title , category , Description}) {
    return (
        <article class="flex max-w-xl flex-col border p-3 rounded-md items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
                <time datetime="2020-03-16" class="text-gray-50">Sep 18, 2023</time>
                <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{category}</a>
            </div>
            <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-grey-800">
                    <a href="#">
                        <span class="absolute inset-0"></span>
                        {title} {}
                    </a>
                </h3>
                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-50 my-4">{Description}</p>
                <Link to='#' className='text-white' >Contact Us</Link>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
                <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
                <div class="text-sm leading-6">
                    <p class="font-semibold text-gray-900">
                        <div className="text-white">
                            {name}
                        </div>
                    </p>
                    <p class="text-gray-50 my-2">Co-Founder / CTO</p>
                </div>
            </div>
        </article>
    )
}

export default Cards