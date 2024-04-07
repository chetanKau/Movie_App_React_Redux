import React, { useEffect } from 'react'
import { fetchApi } from './api'
import { setTopRatedMovie } from '../slice/movieSlice'
import { useDispatch } from "react-redux";
function TopRatedMovies() {
  const dispatch = useDispatch();


  async function topRatedMovieData() {

    const data = await fetchApi('https://api.themoviedb.org/3/movie/top_rated', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
      }
    })
    // console.log("Test-2", data.data.results)
    dispatch(setTopRatedMovie(data.data.results))
  }

  useEffect(() => {
    topRatedMovieData()

  }, [])

  return (
    <>
      {

      }

    </>
  )
}

export default TopRatedMovies
