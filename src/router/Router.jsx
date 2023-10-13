import React from 'react'
import { Navigate,Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Login from '../Components/Login/Login'

const Router = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default Router