
import { createSlice} from "@reduxjs/toolkit";


const initialState = {
    movies: {Title:"Title"},
    shows: {Title:"Title"},
    selected: {id:''}
}

const movieSlice = createSlice({
    name: "movies",
    initialState, //este seria el state previo, incicializado como initialState
    reducers:{
        addMovies: (state, action) =>{  //state viene del redux-toolkit
            state.movies = action.payload
            //console.log(action.payload)
            
        },
        addSeries: (state, action) =>{  //state viene del redux-toolkit
            state.shows = action.payload
           
            
        },
        selected: (state,action) =>{

            state.selected = action.payload
           // console.log(action.payload)
        }

    }
})


export const {addMovies,addSeries, selected} = movieSlice.actions

export default movieSlice.reducer