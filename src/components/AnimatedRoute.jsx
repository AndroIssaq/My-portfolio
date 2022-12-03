import React from 'react'
import {BrowserRouter as Router,Route,Link , Routes , useLocation} from "react-router-dom";
import { Home , Services,About,Blog , Contact} from "../pages"
import {AnimatePresence}from 'framer-motion'
const AnimatedRoute = () => {
    const Location= useLocation()
  return (
    <AnimatePresence initial={false}>
    <Routes location={Location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
  </AnimatePresence>
  )
}

export default AnimatedRoute