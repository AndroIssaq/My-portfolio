import React from 'react'
import { Navbar } from '../../components'
import './Home.css'
const Home = () => {
  return (
    <main className='w-[100%] h-[100vh] '>
      <Navbar/>
      <div className="hero w-[100%] h-[83%] ">
        <div className="content w-[100%] h-[100%] flex ">
          <div className="title text-blue-900 f">
            <h1>Build stunning websites & apps.</h1>
            <p></p>
            <button></button>
          </div>
          <div className="img">

          </div>
        </div>
      </div>
    </main>
    
  )
}

export default Home