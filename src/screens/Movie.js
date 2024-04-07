import React, { useState } from 'react'
import Select from "react-dropdown-select";
import { useSelector } from 'react-redux';

function Movie() {

  const genereSelector=useSelector((state)=>state.movieSlice.movieGenere);
  const sortedMovies=useSelector((state)=>state.movieSlice.sortMovie);
  

  const [genere,setGenere]=useState({});
  const [sortMovie,setsortMovie]=useState({});



  return (
    <div>
      <div className='w-full items-center  bg-slate-500 h-16 flex center justify-between'>

        <h3 className='font-bold size-14 min-w-32  '>Exlpore Movies</h3>
        <div className='flex mr-5 items-center justify-between w-1/3 '>

          <div className='bg-white w-1/2 '>
            <Select
              options={genereSelector}
              labelField="name"
              valueField="id"
              onChange={(values) => setGenere(values)}
            />
            </div>


          <div className=' bg-slate-900 w-1/2 text-white'>
          <Select
              options={sortedMovies}
              labelField="name"
              valueField="id"
              onChange={(values) => setsortMovie(values)}
            />
            </div>

        </div>
      </div>

      Movie
    </div>
  )
}

export default Movie
