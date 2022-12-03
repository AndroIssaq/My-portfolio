import React from 'react'
import {BsPhone} from "react-icons/bs";
import {AiOutlineMessage} from "react-icons/ai";
import {CiLocationOn} from "react-icons/ci";
import './Contact.css'
import { motion } from 'framer-motion';
const Contact = () => {
  return (
    <>
    <motion.section
    initial={{ opacity:0 }}
    animate={{opacity:1  }}
    transition={{ duration:.75 }}
    >
        <div className="container">
            <div className="content mb-[50px] mt-[50px] flex flex-col items-center gap-[40px]">
                <div className="head-title w-[200px] bg-green-200 flex items-center justify-center ">
                    <h2 className='p-[10px]'>Blog</h2>
                </div>
                <div className="info-boxes flex-wrap flex justify-center items-center gap-[40px]">
                    <div className="info-box p-[20px] rounded-xl shadow-xl w-[300px] h-auto flex flex-col justify-center items-center">
                        <div className="icon text-violet-500 text-[60px]"><BsPhone /></div>
                        <h1 className='text-[25px] font-bold'>Call Us On</h1>
                        <p>01280710652</p>
                    </div>

                    <div className="info-box p-[20px] rounded-xl shadow-xl w-[300px] h-auto flex flex-col justify-center items-center">
                        <div className="icon text-violet-500 text-[60px]"><AiOutlineMessage /></div>
                        <h1 className='text-[25px] font-bold'>Email Us At</h1>
                        <p>androisshaq@gmail.com</p>
                    </div>

                    <div className="info-box p-[20px] rounded-xl shadow-xl w-[300px] h-auto flex flex-col justify-center items-center">
                        <div className="icon text-violet-500 text-[60px]"><CiLocationOn /></div>
                        <h1 className='text-[25px] font-bold'>Location</h1>
                        <p>Egypt , Cairo</p>
                    </div>
                </div>

                <form className='w-[100%] '>
                    <div className="names  text-black gap-[20px] w-[100%] flex flex-wrap lg:items-start md:items-start  items-center lg:justify-start md:justify-start  justify-center">
                        <input className=' lg:w-[45%] w-[100%]' placeholder='Your name...' type="text"/>
                        <input  className='lg:w-[45%] w-[100%] ' placeholder='Your email...' type="email" />
                        <input  className=' lg:w-[90%] block w-[100%]' placeholder='Your subject...'  type="text" />
                        <textarea name="" id="" cols="30" rows="10" placeholder='Your message...' className='w-[90%]'></textarea>
                    </div>
                    <div className='cv w-[190px] h-[60px] rounded-sm border-solid border-[2px] font-bold border-gray-300 flex items-center justify-center'>
                        <a className='text-black'>submit</a>
                        <span></span>
                    </div>
                </form>
            </div>
        </div>
    </motion.section>
    </>
  )
}

export default Contact