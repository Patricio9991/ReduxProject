import {Link} from 'react-router-dom'

import { useEffect } from 'react'

import {apiKey,connection} from './api/apiPelis'
import { useDispatch } from 'react-redux'
import { addMovies,addSeries } from '../features/movies/movieSlice'
import MoviesList from './MoviesList'



export default function Home(){
   
    const movie = "Harry"
    const serie = "Friends"
    const dispatch = useDispatch()

    const getMovies = async() => {
        const data = await connection.get(`?apiKey=${apiKey}&s=${movie}&type="movie"`)
        .catch(err => console.log(err))

        const saveMovies = data.data
        dispatch(addMovies(saveMovies))
        //console.log(saveMovies)
        return data
    }

    const getSeries = async() => {
        const data = await connection.get(`?apiKey=${apiKey}&s=${serie}&type="series"`)
        .catch(err => console.log(err))

        const saveSeries = data.data
        dispatch(addSeries(saveSeries))
        
        
    }
    
    useEffect(()=>{
        getMovies()
        getSeries()
    },[])
    


    
   


    return(
        <div className='text-white  h-max flex justify-center '>
            Home
            <MoviesList/>
        </div>
    )
}