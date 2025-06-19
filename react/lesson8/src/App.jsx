import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Dashboard from "./components/dashboard/Dashboard"
import About from "./components/about/About"
import Home from "./components/home/Home"

function App() {
  return (
    <>
     <Header/> 

     <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/home" element={<Home/>}/>
     </Routes>
    </>
  )
}

export default App
