import React from 'react'
import { Navigate,Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'



const Router = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default Router