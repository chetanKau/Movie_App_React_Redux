import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './screens/Home';
import Movie from './screens/Movie';
import { Component } from 'react';
import TvShow from './screens/TvShow';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },
  {
    path: "/Movie",
    Component: Movie
  },
  {
    path: "/TvShow",
    Component: TvShow
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
