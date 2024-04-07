import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    topRatedMovie: [],
    movie:[],

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
        }
    }

})

// console.log(movie.actions)
export const { setTopRatedMovie } = movieSlice.actions;
export default movieSlice.reducer;

