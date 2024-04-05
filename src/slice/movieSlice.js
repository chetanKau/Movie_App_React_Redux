import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    movie: [
        
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

