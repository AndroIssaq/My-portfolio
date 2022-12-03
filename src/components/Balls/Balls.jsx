import React from 'react'
import { motion } from 'framer-motion'


const Balls = ({constraintsRef}) => {
   
  return (
    <div className=' sm:block md:block hidden'>
          <motion.div 
        animate={{ x:[80, -100, 80]}}
        transition={{ type: "spring", stiffness: 200 }}
        drag
        dragConstraints={constraintsRef}
        className=' absolute z-[1] w-[50px] h-[50px] rounded-md   shadow-xl bg-[#EF9A53] top-[20%] left-[5%]'>
        </motion.div>
        <motion.div 
        animate={{ x:[80, -100, 80]}}
        transition={{ type: "spring", stiffness: 200 }}
        drag
        dragConstraints={constraintsRef}
        className=' absolute z-[1] w-[50px] h-[50px] rounded-full  shadow-xl bg-[#EF9A53] top-[83%] left-[33%]'>
        </motion.div>
        <motion.div 
        animate={{ x:[80, -100, 80]}}
        transition={{ type: "spring", stiffness: 500 }}
        drag
        dragConstraints={constraintsRef}
        className=' absolute z-[1] w-[50px] h-[50px] rounded-md  shadow-xl bg-[#EF9A53]  top-[20%] left-[87%]'>
        </motion.div>
        <motion.div 
        transition={{ type: "spring", stiffness: 400 }}
        animate={{ x:[80, -100, 80]}}
        drag
        dragConstraints={constraintsRef}
        className=' absolute z-[1] w-[50px] h-[50px] rounded-full  shadow-xl bg-[#EF9A53] top-[10%] left-[47%]'>
        </motion.div>
        <motion.div 
        animate={{ x:[0, -100, 80]}}
        transition={{ type: "spring", stiffness: 300 }}
        drag
        dragConstraints={constraintsRef}
        className=' absolute z-[1] w-[50px] h-[50px] rounded-md  shadow-xl bg-[#EF9A53]  top-[30%] left-[35%]'>
        </motion.div>
        <motion.div 
        animate={{ x:[80, -100, 80]}}
        transition={{ type: "spring", stiffness:200 }}
        drag
        dragConstraints={constraintsRef}
        dragPropagation={true}
        className=' absolute z-[1] w-[50px] h-[50px] rounded-full  shadow-xl bg-[#EF9A53] top-[90%] left-[87%]'>
        </motion.div>
    </div>
  )
}

export default Balls