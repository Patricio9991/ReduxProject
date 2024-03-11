import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'


import { addUser, changeEmail } from './redux/userSlice'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Email from './components/Email'


function App() {

  const dispatch = useDispatch()
 
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((res)=>{return res.json()})
    .then((data)=>{return dispatch(addUser(data))})
    .catch(err=>console.log(err))
  },[])


  return (
    <div>
        <Header/>
        <Email/>
        
    </div>
  )
}

export default App
