import React, { use, useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Card from './Card'
import Login from './Login'
import Signup from './Signup'
import Options from './Options'

const App = () => {
  let userData = {
    name: '',
    email: '',
    password: ''
  }
  let [user,setUser] = useState(userData)
  return (
    <div>
      
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/card' element={<Card/>} />
        <Route path='/' element={<Login info={user} updateInfo={setUser}/>} />
        <Route path='/signup' element={<Signup info={user} updateInfo={setUser} />} />
        <Route path='/option' element={<Options/>} />
      </Routes>
      
    </div>
  )
}

export default App
