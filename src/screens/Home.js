import React from 'react'
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import SearchTab from '../component/SearchTab';
import 'react-multi-carousel/lib/styles.css';
import TrendingMovie from '../component/TrendingMovie';
import TopRatedMovies from '../utils/TopRatedMovies';

function Home() {
  console.log(process.env.REACT_APP_TOKEN);

  return (
    <div >
      <Navbar />
      <SearchTab />
      <TrendingMovie />
      <TopRatedMovies />
      <Footer />
    </div>
  )
}

export default Home
