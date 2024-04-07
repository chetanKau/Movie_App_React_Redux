import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './screens/Home';
import Movie from './screens/Movie';
// import { Component } from 'react';
import TvShow from './screens/TvShow';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Search from './component/Search';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },
  {
    path: "/Movie",
    element: <div>
      <Navbar/>
      <Movie/>
      <Footer/>
    </div>
  },
  {
    path: "/TvShow",
    element: <div>
      <Navbar/>
      <TvShow/>
      <Footer/>
    </div>
  },
  {
  path:"/search/:name",
  element:<div>
    <Navbar/>
    <Search/>
    <Footer/>
  </div>
}

])


function App() {
  return (
    
      <RouterProvider router={router}>
        <Home/>
      </RouterProvider>
    
  );
}

export default App;
