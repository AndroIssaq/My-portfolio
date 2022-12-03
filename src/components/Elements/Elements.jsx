import React from 'react'
import element1 from '../../assets/hero-element-1.png'
import element2 from '../../assets/service-element-3.png'
import element3 from '../../assets/hero-element-3.png'
import element4 from '../../assets/hero-element-4.png'
import { motion } from 'framer-motion'
const Elements = () => {
  return (
    <>
        <motion.img 
        animate={{ x:[0,100,0] }} 
        transition={{ duration:5 , ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity
        }} 
        src={element1} alt="" className=' absolute top-[10%] left-[1%]' />
        <motion.img
        animate={{ x:[0,-100,0] }} 
        transition={{ duration:5 , ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity
        }} 
        src={element3} alt="" className=' absolute top-[5%]  right-[1%]' />
        <motion.img
        animate={{ y:[0,-100,0] }} 
        transition={{ duration:5 , ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity
        }} 
        src={element2} alt="" className=' absolute top-[65%] left-[1%] rotate-180'/>
        <motion.img
        animate={{ y:[0,100,0] }} 
        transition={{ duration:5 , ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity
        }} 
        src={element4} alt="" className=' absolute top-[50%] right-[1%]'/>
    </>
  )
}

export default Elements