import { useSelector } from "react-redux"
import MovieCard from "./MovieCard"
import Page404 from "./Page404"
import Slider from "react-slick"



export default function MoviesList(){

    const movies = useSelector((state)=>state.movies)
    const shows = useSelector((state)=>state.shows)



    const renderMovies =
        movies.Response == "True" ? (
            movies.Search.map((i,index)=>{return  <MovieCard key={index} data={i} />})
           ): (<div>{movies.Error}</div>)

    const renderSeries =
            shows.Response == "True" ? (shows.Search.map((i,index)=>{
                return (

                    <MovieCard data={i} key={index} />
                )
            })):(<Page404/>)
 
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3
    }

    return(
        <div className="w-10/12 text-white">
            
           
                <div className="text-center text-red-800 mb-5 font-bold text-4xl">
                    <h2>Movies</h2>
                    <hr></hr>
                </div>

                <div className="w-ful "> 
                    <Slider {...settings}>{renderMovies}</Slider>
                </div>

                <div className="text-center text-red-800 mb-5 font-bold text-4xl">
                    <h2>Series</h2>
                    <hr></hr>
                </div>
                <div className="flex flex-wrap flex-shrink gap-5 justify-start w-fit h-fit">
                    {renderSeries}
                </div>
                
            
           

            
        </div>
    )
}