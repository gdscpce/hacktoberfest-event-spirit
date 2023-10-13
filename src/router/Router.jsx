import React from 'react'
import { Navigate,Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'

const Router = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
    </Routes>
    </>
  )
}

export default Router