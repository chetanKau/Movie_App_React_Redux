import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import SearchTab from '../component/SearchTab';

function Home() {

  const data = useSelector((state) => state)
  console.log(data.movieSlice.movie[0])
  console.log(process.env.REACT_APP_TOKEN);



  return (
    <div >
      <Navbar/>
      <SearchTab/>

      {

        data.movieSlice.movie.map((movieDetails) => {
          return (
          <div  >



            
          </div>

          )
        })
      }
      <Footer/>
    </div>
  )
}

export default Home
