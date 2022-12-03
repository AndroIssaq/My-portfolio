import React from 'react'
import './Services.css'
import react from '../../assets/react.png'
import next from '../../assets/next.png'
import tailwindcss from '../../assets/tailwindcss.png'
import Bootstrap from '../../assets/Bootstrap-logo.png'
import js from '../../assets/js.png'
import framer from '../../assets/framer-motion.png'
import { motion } from 'framer-motion'
import { Elements } from '../../components'

const Services = () => {
  return (
    <motion.section
       initial={{ opacity:0 }}
        animate={{opacity:1  }}
        transition={{ duration:.75 }}
    className=' h-[100%] services relative' >
            <Elements />
        <div className="container w-[85%] mx-auto ">
            <div className="content  flex items-center justify-center flex-col">
                <div className="title flex mt-[50px] items-center justify-center flex-col gap-[40px]">
                    <div className="head-title w-[200px] bg-green-200 flex items-center justify-center">
                        <h1 className='p-[10px]'>What I Can Do For You</h1>
                    </div>
                    <div className="lower-title flex flex-col items-center justify-center  gap-[20px] text-center">
                        <h1 className='sm:text-[50px] md:text-[50px] text-[25px] text-blue-900 font-bold'>Services I Can Help You With</h1>
                        <p  className='  w-[370px] sm:w-[500px] md:w-[600px] lg:w-[800px]  text-slate-600 sm:text-[20px] md:text-[20px] text-[15px]'> I always believe in high precision, accuracy, and quality work so definitely deliver neat and clean reusable code.
                            I’m an efficient multitasker person, who is always curious about learning new things.</p>
                    </div>
                </div>
                <div className="cards w-[100%] flex items-center justify-center flex-wrap gap-[40px] mt-[100px]">
                    <motion.div
                        initial={{ y:'600px', opacity:0 }}
                        animate={{ y:0 , opacity:1 }}
                        transition={{ type:'spring'  ,bounce: .25 ,duration:.3}}

                        className="card w-[400px] text-center h-[396px] flex flex-col relative items-center pt-[40px]  gap-[20px]">
                            <div className="icon w-[80px] h-[110px]  rounded-sm skew-y-3 relative">
                                <div className='w-[70px] h-[70px]  rounded-full flex items-center justify-center  absolute left-[35px] top-[20px]'><img src={react} alt="" className='w-[100%] h-[100%]'/></div>
                            </div>
                            <h1 className='text-[30px] font-bold text-blue-900'>React.js</h1>
                            <p className='text-slate-600 w-[300px] font-semibold pl-[20px]'> I Started Coding In React 8 months Ago. I'm Making Progress In It,  It's a Sea, And I Wanted To Dive Into It.</p>
                            <div className='learn'>
                                <button className='text-black font-bold '>learn more</button>
                                <span></span>
                            </div>
                            <span className='shine1'></span>
                            <span className='shine2'></span>
                    </motion.div>
                    <motion.div
                        initial={{ y:'600px', opacity:0 }}
                        animate={{ y:0 , opacity:1 }}
                        transition={{ type: "spring", bounce:.25 }}
                        className="card w-[400px] text-center relative h-[396px] flex flex-col items-center pt-[40px]  gap-[20px] ">
                    <div className="icon w-[80px] h-[110px]  rounded-sm skew-y-3 relative">
                                <div className='w-[70px] h-[70px]  rounded-full flex items-center justify-center  absolute left-[35px] top-[20px]'><img src={next} alt="" className='w-[100%] h-[100%]'/></div>
                            </div>
                            <h1 className='text-[30px] font-bold text-blue-900'>Next.js</h1>
                            <p className='text-slate-600 w-[300px] font-semibold pl-[20px]'> Next is a powerful Frame Work for React. I use it because it is fast to download and open the server, and because it makes router easier. </p>
                            <div className='learn'>
                                <button className='text-black font-bold '>learn more</button>
                                <span></span>
                            </div>
                            <span className='shine1'></span>
                            <span className='shine2'></span>
                    </motion.div>
                    <motion.div 
                       initial={{ y:'600px', opacity:0 }}
                       animate={{ y:0 , opacity:1 }}
                       transition={{ type:'spring' , duration:.3 , stiffness: 200, delay:.4 ,bounce: 0.25}}
                    className="card w-[400px] relative text-center h-[396px] flex flex-col items-center pt-[40px]  gap-[20px] ">
                    <div className="icon w-[80px] h-[110px]  rounded-sm skew-y-3 relative">
                                <div className='w-[70px] h-[70px]  rounded-full flex items-center justify-center  absolute left-[35px] top-[20px]'><img src={tailwindcss} alt="" className='w-[100%] h-[100%] object-contain'/></div>
                            </div>
                            <h1 className='text-[30px] font-bold text-blue-900'>TailwindCSS</h1>
                            <p className='text-slate-600 w-[300px] font-semibold pl-[20px]'> Telwindcss made me not deal with others. but I prefer using Telwindcss and I made 3 projects with it</p>
                            <div className='learn'>
                                <button className='text-black font-bold '>learn more</button>
                                <span></span>
                            </div>
                            <span className='shine1'></span>
                            <span className='shine2'></span>
                    </motion.div>

                    <motion.div    
                        initial={{ y:'600px', opacity:0 }}
                        animate={{ y:0 , opacity:1 }}
                        transition={{ type:'spring' , duration:.3 , stiffness: 200, delay:.6,bounce: 0.25 }}
                        div className="card w-[400px] relative text-center h-[396px] flex flex-col items-center pt-[40px]  gap-[20px] ">
                    <div className="icon w-[80px] h-[110px]  rounded-sm skew-y-3 relative">
                                <div className='w-[70px] h-[70px]  rounded-full flex items-center justify-center  absolute left-[35px] top-[20px]'><img src={Bootstrap} alt="" className='w-[100%] h-[100%] object-cover'/></div>
                            </div>
                            <h1 className='text-[30px] font-bold text-blue-900'>Bootstrap</h1>
                            <p className='text-slate-600 w-[300px] font-semibold pl-[20px]'> Bootstrap is a framework for HTML and CSS that I use if the project is not made with React.</p>
                            <div className='learn'>
                                <button className='text-black font-bold '>learn more</button>
                                <span></span>
                            </div>
                            <span className='shine1'></span>
                            <span className='shine2'></span>
                    </motion.div>


                    <motion.div
                        initial={{ y:'600px', opacity:0 }}
                        animate={{ y:0 , opacity:1 }}
                        transition={{ type:'spring' , duration:.3 , stiffness: 200, delay:.8 ,bounce: 0.25}} 
                        className="card w-[400px] relative text-center h-[396px] flex flex-col items-center pt-[40px]  gap-[20px] ">
                    <div className="icon w-[80px] h-[110px]  rounded-sm skew-y-3 relative">
                                <div className='w-[70px] h-[70px]  rounded-full flex items-center justify-center  absolute left-[35px] top-[20px]'><img src={js} alt="" className='w-[100%] h-[100%] object-cover'/></div>
                            </div>
                            <h1 className='text-[30px] font-bold text-blue-900'>JavaScript </h1>
                            <p className='text-slate-600 w-[300px] font-semibold pl-[20px]'> Vanilla JavaScript I love it very much, I have many projects with it like Todolist and Meditation App</p>
                            <div className='learn'>
                                <button className='text-black font-bold '>learn more</button>
                                <span></span>
                            </div>
                            <span className='shine1'></span>
                            <span className='shine2'></span>
                    </motion.div>


                    <motion.div 
                        initial={{ y:'600px', opacity:0 }}
                        animate={{ y:0 , opacity:1 }}
                        transition={{ type:'spring' , duration:.3 , stiffness: 200, delay:1,bounce: 0.25 }}
                        className="card w-[400px] text-center relative h-[396px] flex flex-col items-center pt-[40px]  gap-[20px] ">
                    <div className="icon w-[80px]  h-[110px]  rounded-sm skew-y-3 relative">
                                <div className='w-[70px] h-[70px]  rounded-full flex items-center justify-center  absolute left-[35px] top-[20px]'><img src={framer} alt="" className='w-[100%] h-[100%] object-cover'/></div>
                            </div>
                            <h1 className='text-[30px] font-bold text-blue-900'>Framer Motion</h1>
                            <p className='text-slate-600 w-[300px] font-semibold pl-[20px]'>It's the strongest thing I've seen at the level of animation. I need to study it later, but I can do wonderful things with it from now on. </p>
                            <div className='learn'>
                                <button className='text-black font-bold '>learn more</button>
                                <span></span>
                            </div>
                            <span className='shine1'></span>
                            <span className='shine2'></span>
                    </motion.div>
                </div>
            </div>
        </div>    
    </motion.section>
  )
}

export default Services