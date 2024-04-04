import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
  const data = useSelector((state) => state)
  console.log(data.movieSlice.movie[0])

  return (
    <div >
      {
        data.movieSlice.movie.map((movieDetails) => {
          return (
          <div key={movieDetails.id} >
            <h2>Movie : {movieDetails.movieName}</h2>
            <h4>Ratings : {movieDetails.ratings}</h4>
          </div>


          )
        })
      }
    </div>
  )
}

export default Home
