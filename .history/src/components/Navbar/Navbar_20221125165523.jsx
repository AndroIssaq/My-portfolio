import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {FaBars}from 'react-icons/fa'
import {us}
const Navbar = () => {
  return (
    <nav className='w-[100%]   p-[30px] relative'>
        <div className="container w-[90%] m-auto">
            <div className="nav-content flex items-center justify-between ">
            <div className="logo flex items-center justify-center gap-[15px]">
                <Link to='/'><div className=' logo-container w-[60px] h-[60px]  rounded-xl  bg-violet-600 flex items-center justify-center relative'>
                    <span className='text-white font-bold  text-[30px]'>A </span>
                    <span className='  w-[7px] h-[7px] bg-white rounded-full absolute bottom-[5px] left-[5px]'></span>
                </div>
                </Link>
                
            </div>
            <div className="links sm:block md:block hidden">
                <ul className='flex gap-[20px]'>
                    <Link to='/' className='text-blue-900 font-bold hover:text-violet-600'>Home</Link>
                    <Link to='/' className='text-blue-900 font-bold hover:text-violet-600'>Services</Link>
                    <Link to='/' className='text-blue-900 font-bold hover:text-violet-600'>About Me</Link>
                    <Link to='/' className='text-blue-900 font-bold hover:text-violet-600'>Blog</Link>
                    <Link to='/' className='text-blue-900 font-bold hover:text-violet-600'>Pages</Link>
                    <Link to='/' className='text-blue-900 font-bold hover:text-violet-600'>Contact Me</Link>
                </ul>
            </div>

            <div className="icons cursor-pointer text-[35px] text-black sm:hidden md:hidden block relative" >
                <FaBars/>

                
            </div>
            <div className="mob-nav absolute w-[90%] h-[400px] p-[40px] bg-black left-[50%] translate-x-[-50%] rounded-xl top-[100px] ">
            <ul className='flex gap-[20px] flex-col'>
                    <Link to='/' className='text-white font-bold hover:text-violet-600 text-[25px]'>Home</Link>
                    <Link to='/' className='text-white font-bold hover:text-violet-600 text-[25px]'>Services</Link>
                    <Link to='/' className='text-white font-bold hover:text-violet-600 text-[25px]'>About Me</Link>
                    <Link to='/' className='text-white font-bold hover:text-violet-600 text-[25px]'>Blog</Link>
                    <Link to='/' className='text-white font-bold hover:text-violet-600 text-[25px]'>Pages</Link>
                    <Link to='/' className='text-white font-bold hover:text-violet-600 text-[25px]'>Contact Me</Link>
                </ul>
            </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar