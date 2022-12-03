import React from 'react'
import { Navbar } from '../../components'
import './Home.css'
const Home = () => {
  return (
    <main className='w-[100%] h-[100vh] '>
      <Navbar/>
      <div className="hero w-[100%] h-[83%] ">
        <div className="content w-[100%] h-[100%] flex ">
          <div className="title pl-[40px] text-blue-900 flex flex-col gap-[30px] justify-center  flex-1">
            <h1 className='text-[50px] font-bold'>Build stunning websites & <br/>apps.</h1>
            <p className='text-[25px] text-slate-600'>Make all your dreams of animation and functions using the latest technologies in web development .</p>
            <div className='w-[120px] h-[30px] rounded-sm bg'>
              <button>Download</button>
            </div>
            
          </div>
          <div className="img flex-1">

          </div>
        </div>
      </div>
    </main>
    
  )
}

export default Home