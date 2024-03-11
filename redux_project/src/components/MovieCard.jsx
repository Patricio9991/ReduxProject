import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { selected } from "../features/movies/movieSlice";



export default function MovieCard({data}){
    

    const dispatch = useDispatch()

    const showDetails = () =>{
        // console.log(data.imdbID)
        dispatch(selected(data.imdbID))
    }

    return(
        <Link to={`/movie/${data.imdbID}`}>
            <article className="w-36 mt-12" onClick={showDetails}>
                <div className=" flex justify-center overflow-hidden h-52 object-cover hover:transition-all duration-150 hover:scale-110 cursor-pointer">
                        <img src={data.Poster}/>
                </div>

                <div className=" line-clamp-2 hover:overflow-visible hover:underline cursor-pointer"> {/*Estas propiedades son para que se muestren "..." cuando el texto excede y un hover para que se muestre todo el nombre*/}
                    {data.Title}
                </div>

            </article>
        </Link>
    )
}