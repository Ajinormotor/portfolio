import { Routes,Navigate,Route} from "react-router-dom"


import About from "../Pages/About"
import Projects from "../Pages/Projects"

import React from 'react'
import Home from "../Pages/Home"

const Routs = () => {
  return (
  
  <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  )
}

export default Routs