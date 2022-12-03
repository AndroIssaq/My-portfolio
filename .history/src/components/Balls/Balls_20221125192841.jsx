import React from 'react'
import mot
const Balls = () => {
  return (
    <div>
          <motion.div 
        animate={{ x:'80px'}}
        transition={{ type: "spring", stiffness: 200 }}
        drag
        dragConstraints={constraintsRef}
        className=' absolute z-[1] w-[50px] h-[50px] rounded-md bg-yellow-400 top-[20%] left-[5%]'>
        </motion.div>
        <motion.div 
        animate={{ x:'80px'}}
        transition={{ type: "spring", stiffness: 200 }}
        drag
        dragConstraints={constraintsRef}
        className=' absolute z-[1] w-[50px] h-[50px] rounded-full bg-yellow-400 top-[80%] left-[33%]'>
        </motion.div>
        <motion.div 
        animate={{ x:'80px'}}
        transition={{ type: "spring", stiffness: 500 }}
        drag
        dragConstraints={constraintsRef}
        className=' absolute z-[1] w-[50px] h-[50px] rounded-md bg-yellow-400 top-[20%] left-[87%]'>
        </motion.div>
        <motion.div 
        transition={{ type: "spring", stiffness: 400 }}
        animate={{ x:'80px'}}
        drag
        dragConstraints={constraintsRef}
        className=' absolute z-[1] w-[50px] h-[50px] rounded-full bg-yellow-400 top-[10%] left-[47%]'>
        </motion.div>
        <motion.div 
        animate={{ x:'80px'}}
        transition={{ type: "spring", stiffness: 300 }}
        drag
        dragConstraints={constraintsRef}
        className=' absolute z-[1] w-[50px] h-[50px] rounded-md bg-yellow-400 top-[30%] left-[35%]'>
        </motion.div>
        <motion.div 
        animate={{ x:'80px'}}
        transition={{ type: "spring", stiffness:200 }}
        drag
        dragConstraints={constraintsRef}
        dragPropagation={true}
        className=' absolute z-[1] w-[50px] h-[50px] rounded-full bg-yellow-400 top-[90%] left-[87%]'>
        </motion.div>
    </div>
  )
}

export default Balls