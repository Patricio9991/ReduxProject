import {Routes,Route} from 'react-router-dom'


import Home from './components/Home.jsx'
import MovieDetails from './components/MovieDetails'
import Page404 from './components/Page404'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

//path = '*' para not found
export default function App() {
  return (
    <div className='h-max w-screen bg-black'>
      <Header/>

        <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/movie/:movieID' element={<MovieDetails/>}/>
            <Route path='*' element={<Page404/>}/>
        </Routes>

      <Footer/>  
    </div>
    
  )
}
