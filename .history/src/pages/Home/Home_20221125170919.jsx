import React from 'react'
import { Navbar } from '../../components'
import './Home.css'
const Home = () => {
  return (
    <main className='w-[100%] h-[100vh] '>
      <Navbar/>
      <div className="hero w-[100%] h-[83%] ">
        <div className="content w-[100%] h-[83%] flex"></div>
      </div>
    </main>
    
  )
}

export default Home