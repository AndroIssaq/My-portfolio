import React from 'react'
import { Navbar } from '../../components'
import './Home.css'
import avatar from '../../assets/avatar.jpg'
const Home = () => {
  return (
    <main className='w-[100%] sm:h-[100vh] md:h-[100vh] h-auto '>
      <Navbar/>
      <div className="hero mt-[100px] ">
        <div className="content w-[100%] h-[100%] flex justify-between flex-wrap sm:gap-0 md:gap-0 gap-[50px]">
          <div className="title pl-[40px] text-blue-900 flex flex-col gap-[30px] justify-center  flex-1">
            <h1 className='text-[50px] font-bold'>Build stunning websites & <br/>apps.</h1>
            <p className='text-[25px] text-slate-600'>Make all your dreams of animations and functions using the latest technologies in web development .</p>
            <div className='cv w-[190px] h-[60px] rounded-sm border-solid border-[2px] font-bold border-gray-500 flex items-center justify-center'>
              <a download href='../../assets/CV.pdf'>Download CV</a>
              <span></span>
            </div>
            
          </div>
          <div className="img flex-1 flex items-center justify-center  ">
              <div className='sm:w-[400px] h-[400px] rounded-full overflow-hidden shadow-2xl'>
                <img src={avatar} alt="" />
              </div>
          </div>
        </div>
      </div>
    </main>
    
  )
}

export default Home