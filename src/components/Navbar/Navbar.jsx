import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {FaBars}from 'react-icons/fa'
import { useState ,useEffect} from 'react'

const Navbar = () => {
    const [pathName,setPathName]=useState('/')
    const pathNameHandler=()=>{
        const path = window.location.pathname
        setPathName(path)
        console.log(pathName);
    }       
    useEffect(()=>{
        pathNameHandler()
    },[pathName])
   
    const [toggle,setToggle]=useState(false)
return (
    <nav className='w-[100%]   p-[30px] relative'>
        <div className="container w-[90%] m-auto">
            <div className="nav-content flex items-center justify-between ">
            <div className="logo flex items-center justify-center gap-[15px]">
                <Link to='/'><div className=' logo-container w-[60px] h-[60px]  rounded-xl  bg-violet-600 flex items-center justify-center relative'>
                    <span className='text-white font-bold  text-[30px]'>A </span>
                    <span className='  w-[8px] h-[8px] bg-white rounded-full absolute bottom-[5px] left-[5px]'></span>
                </div>
                </Link>
                
            </div>
            <div className="links sm:block md:block hidden">
                <ul className='flex gap-[20px]'>
                    <Link onClick={()=>setPathName()} to='/' className={`${pathName ==='/'?'text-violet-600':''} text-blue-900 font-bold hover:text-violet-600`}>Home</Link>
                    <Link onClick={()=>setPathName()} to='/services' className={`${pathName ==='/services'?'text-violet-600':''} text-blue-900 font-bold hover:text-violet-600`}>Services</Link>
                    <Link onClick={()=>setPathName()} to='/about' className={`${pathName ==='/about'?'text-violet-600':''} text-blue-900 font-bold hover:text-violet-600`}>About Me</Link>
                    <Link onClick={()=>setPathName()} to='/blog' className={`${pathName ==='/blog'?'text-violet-600':''} text-blue-900 font-bold hover:text-violet-600`}>Blog</Link>
                    <Link onClick={()=>setPathName()} to='/contact' className={`${pathName ==='/contact'?'text-violet-600':''} text-blue-900 font-bold hover:text-violet-600`}>Contact Me</Link>
                </ul>
            </div>

            <div onClick={()=>setToggle(!toggle)} className="icons cursor-pointer text-[35px] text-black sm:hidden md:hidden block relative" >
                <FaBars/>

                
            </div>
            <div className={`mob-nav absolute w-[90%] z-20  h-[400px] p-[40px] bg-black left-[50%] translate-x-[-50%] rounded-xl top-[100px] ${toggle?'nav-open':'nav-close'}`}>
            <ul className='flex gap-[20px] flex-col'>
                    <Link onClick={()=>setToggle(!toggle)} to='/' className='text-white font-bold hover:text-violet-600 text-[25px]'>Home</Link>
                    <Link onClick={()=>setToggle(!toggle)} to='/services' className='text-white font-bold hover:text-violet-600 text-[25px]'>Services</Link>
                    <Link onClick={()=>setToggle(!toggle)} to='/about' className='text-white font-bold hover:text-violet-600 text-[25px]'>About Me</Link>
                    <Link onClick={()=>setToggle(!toggle)} to='/blog' className='text-white font-bold hover:text-violet-600 text-[25px]'>Blog</Link>
                    <Link onClick={()=>setToggle(!toggle)} to='/contact' className='text-white font-bold hover:text-violet-600 text-[25px]'>Contact Me</Link>
                </ul>
            </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar