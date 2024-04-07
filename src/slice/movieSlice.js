import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    topRatedMovie: [],
    popular:[],
    movie:[],
    movieGenere:[],
    sortMovie:[],
    searchedMovie:[],

}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setTopRatedMovie: (state, action) => {
            console.log("Test-1",action.payload );
            state.topRatedMovie = action.payload
        },
        setMovie:(state,action)=>{
            state.movie=action.payload
        },
        setGenere:(state,action)=>{
            state.movieGenere=action.payload
        },
        setSortMovie:(state,action)=>{
            state.sortMovie=action.payload
        },
        setSearchedMovie:(state,action)=>{
            state.searchedMovie=action.payload
        },
        setPopular:(state,action)=>{
            state.popular=action.payload
        }
    }

})

// console.log(movie.actions)
export const { setTopRatedMovie,setMovie,setGenere, setSortMovie, setSearchedMovie,setPopular} = movieSlice.actions;
export default movieSlice.reducer;

