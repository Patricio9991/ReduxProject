import { apiKey,connection } from "./api/apiPelis"
import { useSelector } from "react-redux"
import { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router-dom"



export default function MovieDetails(){
    const [movieInfo,setMovieInfo] = useState({})

    const imdbID = useSelector(state => state.selected)
    //podria usar useParams paa no perder el ID al actualizar la pagina y "limpiar el estado"
    const {movieID} = useParams()

    console.log(movieID)

    const getDetails = async () => {
        const fetchDetails = await connection.get(`?apiKey=${apiKey}&i=${movieID}&plot=full`)
        //.then(res =>console.log(res))
        .catch(err => console.log(err))

        setMovieInfo(fetchDetails.data)
    }

    useEffect(()=>{
        getDetails()
    },[])

console.log(movieInfo)
    return(
        <Fragment>

            {Object.keys(movieInfo).length === 0? (<div className="text-white text-7xl text-center">...Loading</div>):(
            <div className="flex justify-between h-screen text-white">

                <div className="p-3.5 w-9/12">
                    <h1 className="text-4xl pb-10">{movieInfo.Title}</h1>

                    <div className="flex justify-around">
                        <span>Runtime: {movieInfo.Runtime}</span>
                        <span>IMDB Rating: {movieInfo.imdbRating}</span>
                        <span>IMDB Votes: {movieInfo.imdbVotes}</span>

                    </div>
                    
                    <h2 className="pt-3.5">{movieInfo.Plot}</h2>

                    <div className="mt-5 flex flex-col justify-around">
                        <span className="py-2.5 ">Director: {movieInfo.Director} </span>
                        <span className="py-2.5 ">Actors: {movieInfo.Actors}</span>
                        <span className="py-2.5 ">Genres: {movieInfo.Genre}</span>
                        <span className="py-2.5">Languages: {movieInfo.Language}</span>
                        <span className="py-2.5 ">Awards: {movieInfo.Awards} </span>
                    </div>
                </div>

                <div className="p-6 w-">
                    <img src={movieInfo.Poster}/>

                </div>

            </div>)}
        </Fragment>

    )
}