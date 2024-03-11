import {Link} from 'react-router-dom'
import cat from '../assets/cat.png'
export default function Header(){
    return(
        <header className="bg-red-800 w-100 p-1 flex flex-row items-center justify-around">
            <Link to='/'>
                <div className='text-3xl font-bold font-mono'>REDUX MOVIE APP</div>
            </Link>
 
            <div> 
                <img src={cat} alt='user_image' 
                className='h-16'></img>
            </div>
        </header>
    )
}