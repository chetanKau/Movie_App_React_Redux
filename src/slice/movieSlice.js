import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    movie: [
        {
        id: 1,
        movieName: "Diljale",
        ratings: 5,
        collection: "650cr."
    },
    {
        id: 2,
        movieName: "xyz",
        ratings: 2,
        collection: "10cr."
    },
    ]

}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovie: (state, action) => {
            state.movie = action.payload
        }
    }

})

// console.log(movie.actions)
export const { setMovie } = movieSlice.actions;
export default movieSlice.reducer;

