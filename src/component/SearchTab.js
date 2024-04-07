import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';


function SearchTab() {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();
    // console.log(searchValue)
    const searchMovieHandler = () => {
        console.log(searchValue);

        navigate("/SearchedMovie")

    }

    return (
        <div className=" min-h-dvh bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
            <div className='justify-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500   flex ' >

                <input type='text'
                    className='align-items-center flex bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-2/4 p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Search Movie' onChange={(e) => {
                        setSearchValue(e.target.value)

                    }} />
                <button
                    className='text-white ml-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'

                    onClick={() => {
                        searchMovieHandler()

                    }}
                >Search
                </button>
            </div>

        </div>

    )
}

export default SearchTab;
