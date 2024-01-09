import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommende:null,
    newDisney:null,
    original:null,
    trending:null,
    disney:null,
    pixar:null,
    marvel:null,
    starwars:null,
    national:null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
   setMovies:(state, action) =>{
    state.recommend = action.payload.recommend
    state.newDisney = action.payload.newDisney
    state.original = action.payload.original
    state.trending = action.payload.trending
    state.disney = action.payload.disney
    state.pixar = action.payload.pixar
    state.marvel = action.payload.marvel
    state.starwars = action.payload.starwars
    state.national = action.payload.national

   }
  },
});

export const { setMovies} = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;
export const selectDisney = (state) => state.movie.disney;
export const selectPixar = (state) => state.movie.pixar;
export const selectMarvel = (state) => state.movie.marvel;
export const selectStarWars = (state) => state.movie.starwars;
export const selectNational = (state) => state.movie.national;


export default movieSlice.reducer;