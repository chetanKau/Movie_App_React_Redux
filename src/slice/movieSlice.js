import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    movie: [{
        id: 1,
        movieName: "Diljale",
        ratings: 5,
        collection: "650cr."
    },
    ]

}

const movie = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovie: (state, action) => {
            state.movie = action.payload
        }
    }

})

// console.log(movie.actions)
export const { setMovie } = movie.actions;
export const movieReducer = movie.reducer;

