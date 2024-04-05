import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    return (
        <div>
            <nav class="bg-gray-800">
                <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div class="relative flex h-16 items-center justify-between">

                        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                            <div class="flex flex-shrink-0 items-center ">
                                <NavLink to="/">
                                    <img class="h-8 w-auto" src="https://moviex-olive.vercel.app/assets/movix-logo-d720c325.svg" alt="Your Company" />
                                </NavLink>

                            </div>
                            <div class="hidden sm:ml-6 sm:block">
                                <div class="flex space-x-4 text-white bg-gray-900 block rounded-md px-3 py-2 text-base font-medium ">
                                    <NavLink
                                        to="/movie"
                                        class="bg-gray-900 text-white block rounded-md px-3 py-2  text-base font-medium" aria-current="page" >
                                        Movie
                                    </NavLink>

                                    <NavLink
                                        to="/TvShow"
                                        class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                                        TV Shows
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="sm:hidden" id="mobile-menu">
                    <div class="space-y-1 px-2 pb-3 pt-2">
                        <a href="/" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Movie</a>
                        <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">TV Shows</a>
                    </div>
                </div>
            </nav>


        </div>
    );
};

export default Navbar


