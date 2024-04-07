import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchApi } from '../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedMovie } from '../slice/movieSlice'

function Search() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.movieSlice.searchedMovie)

  console.log(name);
  async function SearchedMovie() {
    try {
      const data = await fetchApi(`https://api.themoviedb.org/3/search/multi?query=${name}`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
        }
      })

      console.log("Movie", data.data.results);

      dispatch(setSearchedMovie(data.data.results))
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    SearchedMovie()
  }, [])

  console.log("Selector Movies", selector);
  return (
    <div>
      <div class="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <span className='font-bold text-gray-100 text-2xl'>Results for :- {name}</span> 
      </div>
      <div className='grid grid-cols-4 gap-4 mb-8 bg-gradient-to-r from-violet-500 to-fuchsia-500'>
        {
          selector.map((movie) => {
            return (
              <div>
                <div key={movie.id}>
                  <div className=' m-3 p-4 rounded bg-slate-600' style={{ height: "28rem", width: "16rem" }}>
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt='#' />
                    <p className=' text-lg font-bold tracking-normal text-center text-white'>Title {movie.original_title}</p>
                    <p className=' text-lg font-bold tracking-normal text-center text-white'>Votes: {movie.vote_average}</p>
                    <p className='text-lg  tracking-normal text-center text-white'>Release Date : {movie.release_date}</p>
                  </div>
                </div>

              </div>
            )
          })

        }


      </div>

    </div>
  )
}

export default Search
