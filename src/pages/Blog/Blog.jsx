import React from 'react'
import { motion } from 'framer-motion' 
import { useRef , useState , useEffect } from 'react'
import {blog1,blog2,blog3,blog4,happy1,happy2,happy3,happy4,work1,work2,work3,work4 , post1 , post2,post3} from '../../assets/index'
import './Blog.css'
import { Elements } from '../../components'
const Blog = () => {
    const [width , setWidth]= useState(0)
    const ref=useRef()
        const scrollHandler=()=>{
            const cursolWidth=ref.current.clientWidth
            const realcursolwidth=ref.current.scrollWidth - cursolWidth;
            setWidth(realcursolwidth)
        }
        const [filter,setFilter]=useState('all')
        useEffect(()=>{
        scrollHandler()
    },[width])
    
    const cardsVraints={
        from:{
        opacity: 0,
        
        },
        
        to:{
        opacity: 1,
        delay:.5,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
        }
    }

    const Cards=()=>{

    const card={
    from:{
        opacity:0,
    },
    to:{
        opacity:1,
    }
}

    if(filter==='all'){
        return(
        <>
            <motion.div variants={card} initial='from' animate='to' className={ `img-card  lg:min-w-[400px] md:min-w-[300px] sm:min-w-[250px] min-w-[200px]  shadow-lg`}>
                    <div className="img w-[100%] h-[200px]">
                    <img src={blog1} alt="" className='w-[100%] h-[100%] object-cover '  />
                    </div>
                    <div className="details w-[100%] p-[20px] flex flex-col gap-[10px]">
                    <p>05 Mar 2022</p>
                    <h1 className='text-[18px] font-bold'>Why I Switched to Sketch For UI Design</h1>
                    </div>
                </motion.div>

                <motion.div variants={card} initial='from' animate='to' className="img-card lg:min-w-[400px] md:min-w-[300px] sm:min-w-[250px] min-w-[200px]  shadow-lg">
                    <div className="img w-[100%] h-[200px]">
                    <img src={blog2} alt="" className='w-[100%] h-[100%] object-cover ' />
                    </div>
                    <div className="details w-[100%] p-[20px] flex flex-col gap-[10px]">
                    <p>05 Mar 2022</p>
                    <h1 className='text-[18px] font-bold'>Why I Switched to Sketch For UI Design</h1>
                    </div>
                </motion.div>


                <motion.div variants={card} initial='from' animate='to' className="img-card lg:min-w-[400px] md:min-w-[300px] sm:min-w-[250px] min-w-[200px]  shadow-lg">
                    <div className="img w-[100%] h-[200px]">
                    <img src={blog3} alt="" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className="details w-[100%] p-[20px] flex flex-col gap-[10px]">
                    <p>05 Mar 2022</p>
                    <h1 className='text-[18px] font-bold'>Why I Switched to Sketch For UI Design</h1>
                    </div>
                </motion.div>

                <motion.div variants={card} initial='from' animate='to' className="img-card lg:min-w-[400px] md:min-w-[300px] sm:min-w-[250px] min-w-[200px]  shadow-lg">
                    <div className="img w-[100%] h-[200px]">
                    <img src={blog4} alt="" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className="details w-[100%] p-[20px] flex flex-col gap-[10px]">
                    <p>05 Mar 2022</p>
                    <h1 className='text-[18px] font-bold'>Why I Switched to Sketch For UI Design</h1>
                    </div>
                </motion.div>

                <motion.div variants={card} initial='from' animate='to' className="img-card lg:min-w-[400px] md:min-w-[300px] sm:min-w-[250px] min-w-[200px]  shadow-lg">
                    <div className="img w-[100%] h-[200px]">
                    <img src={happy2} alt="" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className="details w-[100%] p-[20px] flex flex-col gap-[10px]">
                    <p>05 Mar 2022</p>
                    <h1 className='text-[18px] font-bold'>Why I Switched to Sketch For UI Design</h1>
                    </div>
                </motion.div>

                <motion.div variants={card} initial='from' animate='to' className="img-card lg:min-w-[400px] md:min-w-[300px] sm:min-w-[250px] min-w-[200px]  shadow-lg">
                    <div className="img w-[100%] h-[200px]">
                    <img src={happy3} alt="" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className="details w-[100%] p-[20px] flex flex-col gap-[10px]">
                    <p>05 Mar 2022</p>
                    <h1 className='text-[18px] font-bold'>Why I Switched to Sketch For UI Design</h1>
                    </div>
                </motion.div>


                <motion.div variants={card} initial='from' animate='to' className="img-card lg:min-w-[400px] md:min-w-[300px] sm:min-w-[250px] min-w-[200px]  shadow-lg">
                    <div className="img w-[100%] h-[200px]">
                    <img src={happy1} alt="" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className="details w-[100%] p-[20px] flex flex-col gap-[10px]">
                    <p>05 Mar 2022</p>
                    <h1 className='text-[18px] font-bold'>Why I Switched to Sketch For UI Design</h1>
                    </div>
                </motion.div>

                <motion.div variants={card} initial='from' animate='to' className="img-card lg:min-w-[400px] md:min-w-[300px] sm:min-w-[250px] min-w-[200px]  shadow-lg">
                    <div className="img w-[100%] h-[200px]">
                    <img src={happy4} alt="" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className="details w-[100%] p-[20px] flex flex-col gap-[10px]">
                    <p>05 Mar 2022</p>
                    <h1 className='text-[18px] font-bold'>Why I Switched to Sketch For UI Design</h1>
                    </div>
                </motion.div>

                <motion.div variants={card} initial='from' animate='to' className="img-card lg:min-w-[400px] md:min-w-[300px] sm:min-w-[250px] min-w-[200px]  shadow-lg">
                    <div className="img w-[100%] h-[200px]">
                    <img src={work1} alt="" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className="details w-[100%] p-[20px] flex flex-col gap-[10px]">
                    <p>05 Mar 2022</p>
                    <h1 className='text-[18px] font-bold'>Why I Switched to Sketch For UI Design</h1>
                    </div>
                </motion.div>

                
                <motion.div variants={card} initial='from' animate='to' className="img-card lg:min-w-[400px] md:min-w-[300px] sm:min-w-[250px] min-w-[200px]  shadow-lg">
                    <div className="img w-[100%] h-[200px]">
                    <img src={work2} alt="" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className="details w-[100%] p-[20px] flex flex-col gap-[10px]">
                    <p>05 Mar 2022</p>
                    <h1 className='text-[18px] font-bold'>Why I Switched to Sketch For UI Design</h1>
                    </div>
                </motion.div>
                
                
                <motion.div variants={card} initial='from' animate='to' className="img-card lg:min-w-[400px] md:min-w-[300px] sm:min-w-[250px] min-w-[200px]  shadow-lg">
                    <div className="img w-[100%] h-[200px]">
                    <img src={work3} alt="" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className="details w-[100%] p-[20px] flex flex-col gap-[10px]">
                    <p>05 Mar 2022</p>
                    <h1 className='text-[18px] font-bold'>Why I Switched to Sketch For UI Design</h1>
                    </div>
                </motion.div>

                
                <motion.div variants={card} initial='from' animate='to' className="img-card lg:min-w-[400px] md:min-w-[300px] sm:min-w-[250px] min-w-[200px]  shadow-lg">
                    <div className="img w-[100%] h-[200px]">
                    <img src={work4} alt="" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className="details w-[100%] p-[20px] flex flex-col gap-[10px]">
                    <p>05 Mar 2022</p>
                    <h1 className='text-[18px] font-bold'>Why I Switched to Sketch For UI Design</h1>
                    </div>
                </motion.div>
                </>
            )
        }
        if(filter==='blog'){
            return(
            <>
                <motion.div variants={card} initial='from' animate='to' className={ `img-card  lg:min-w-[400px] md:min-w-[300px] sm:min-w-[250px] min-w-[200px]  shadow-lg`}>
                    <div className="img w-[100%] h-[200px]">
                    <img src={blog1} alt="" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className="details w-[100%] p-[20px] flex flex-col gap-[10px]">
                    <p>05 Mar 2022</p>
                    <h1 className='text-[18px] font-bold'>Why I Switched to Sketch For UI Design</h1>
                    </div>
                </motion.div>

                <motion.div variants={card} initial='from' animate='to' className="img-card lg:min-w-[400px] md:min-w-[300px] sm:min-w-[250px] min-w-[200px]  shadow-lg">
                    <div className="img w-[100%] h-[200px]">
                    <img src={blog2} alt="" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className="details w-[100%] p-[20px] flex flex-col gap-[10px]">
                    <p>05 Mar 2022</p>
                    <h1 className='text-[18px] font-bold'>Why I Switched to Sketch For UI Design</h1>
                    </div>
                </motion.div>


                <motion.div variants={card} initial='from' animate='to' className="img-card lg:min-w-[400px] md:min-w-[300px] sm:min-w-[250px] min-w-[200px]  shadow-lg">
                    <div className="img w-[100%] h-[200px]">
                    <img src={blog3} alt="" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className="details w-[100%] p-[20px] flex flex-col gap-[10px]">
                    <p>05 Mar 2022</p>
                    <h1 className='text-[18px] font-bold'>Why I Switched to Sketch For UI Design</h1>
                    </div>
                </motion.div>

                <motion.div variants={card} initial='from' animate='to'  className="img-card lg:min-w-[400px] md:min-w-[300px] sm:min-w-[250px] min-w-[200px]  shadow-lg">
                    <div className="img w-[100%] h-[200px]">
                    <img src={blog4} alt="" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className="details w-[100%] p-[20px] flex flex-col gap-[10px]">
                    <p>05 Mar 2022</p>
                    <h1 className='text-[18px] font-bold'>Why I Switched to Sketch For UI Design</h1>
                    </div>
                </motion.div>
            </>
            )
        }
        if(filter==='happy'){
        return(
            <>
            <motion.div variants={card} initial='from' animate='to' className="img-card lg:min-w-[400px] md:min-w-[300px] sm:min-w-[250px] min-w-[200px]  shadow-lg">
                    <div className="img w-[100%] h-[200px]">
                    <img src={happy2} alt="" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className="details w-[100%] p-[20px] flex flex-col gap-[10px]">
                    <p>05 Mar 2022</p>
                    <h1 className='text-[18px] font-bold'>Why I Switched to Sketch For UI Design</h1>
                    </div>
                </motion.div>

                <motion.div variants={card} initial='from' animate='to' className="img-card lg:min-w-[400px] md:min-w-[300px] sm:min-w-[250px] min-w-[200px]  shadow-lg">
                    <div className="img w-[100%] h-[200px]">
                    <img src={happy3} alt="" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className="details w-[100%] p-[20px] flex flex-col gap-[10px]">
                    <p>05 Mar 2022</p>
                    <h1 className='text-[18px] font-bold'>Why I Switched to Sketch For UI Design</h1>
                    </div>
                </motion.div>


                <motion.div variants={card} initial='from' animate='to' className="img-card lg:min-w-[400px] md:min-w-[300px] sm:min-w-[250px] min-w-[200px]  shadow-lg">
                    <div className="img w-[100%] h-[200px]">
                    <img src={happy1} alt="" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className="details w-[100%] p-[20px] flex flex-col gap-[10px]">
                    <p>05 Mar 2022</p>
                    <h1 className='text-[18px] font-bold'>Why I Switched to Sketch For UI Design</h1>
                    </div>
                </motion.div>

                <motion.div variants={card} initial='from' animate='to' className="img-card lg:min-w-[400px] md:min-w-[300px] sm:min-w-[250px] min-w-[200px]  shadow-lg">
                    <div className="img w-[100%] h-[200px]">
                    <img src={happy4} alt="" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className="details w-[100%] p-[20px] flex flex-col gap-[10px]">
                    <p>05 Mar 2022</p>
                    <h1 className='text-[18px] font-bold'>Why I Switched to Sketch For UI Design</h1>
                    </div>
                </motion.div>
            </>
        )
        }
        if(filter==='work'){
        return(
            <>
                <motion.div variants={card} initial='from' animate='to' className="img-card lg:min-w-[400px] md:min-w-[300px] sm:min-w-[250px] min-w-[200px]  shadow-lg">
                    <div className="img w-[100%] h-[200px]">
                    <img src={work1} alt="" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className="details w-[100%] p-[20px] flex flex-col gap-[10px]">
                    <p>05 Mar 2022</p>
                    <h1 className='text-[18px] font-bold'>Why I Switched to Sketch For UI Design</h1>
                    </div>
                </motion.div>

                
                <motion.div variants={card} initial='from' animate='to' className="img-card lg:min-w-[400px] md:min-w-[300px] sm:min-w-[250px] min-w-[200px]  shadow-lg">
                    <div className="img w-[100%] h-[200px]">
                    <img src={work2} alt="" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className="details w-[100%] p-[20px] flex flex-col gap-[10px]">
                    <p>05 Mar 2022</p>
                    <h1 className='text-[18px] font-bold'>Why I Switched to Sketch For UI Design</h1>
                    </div>
                </motion.div>
                
                
                <motion.div variants={card} initial='from' animate='to' className="img-card lg:min-w-[400px] md:min-w-[300px] sm:min-w-[250px] min-w-[200px]  shadow-lg">
                    <div className="img w-[100%] h-[200px]">
                    <img src={work3} alt="" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className="details w-[100%] p-[20px] flex flex-col gap-[10px]">
                    <p>05 Mar 2022</p>
                    <h1 className='text-[18px] font-bold'>Why I Switched to Sketch For UI Design</h1>
                    </div>
                </motion.div>

                
                <motion.div variants={card} initial='from' animate='to' className="img-card lg:min-w-[400px] md:min-w-[300px] sm:min-w-[250px] min-w-[200px]  shadow-lg">
                    <div className="img w-[100%] h-[200px]">
                    <img src={work4} alt="" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className="details w-[100%] p-[20px] flex flex-col gap-[10px]">
                    <p>05 Mar 2022</p>
                    <h1 className='text-[18px] font-bold'>Why I Switched to Sketch For UI Design</h1>
                    </div>
                </motion.div>
        </>
        )
    }
}

return (
    <>
<motion.section
initial={{ opacity:0 }}
animate={{opacity:1  }}
transition={{ duration:.75 }}
className=' relative blog'>
        <Elements/>
    <div className="container">
        <div className="content flex flex-col mt-[50px] lg:justify-start justify-center  ">
            <div className="head-title w-[200px] bg-green-200 flex items-center justify-center ">
                <h2 className='p-[10px]'>Blog</h2>
            </div>
            <div className="filters mt-[50px]">
                <ul className='text-[#52526c] flex items-center gap-[25px]  '>
                    <li onClick={()=>setFilter('all') }   className={` ${filter==='all'? 'text-black font-bold'  : ''} cursor-pointer `}>All</li>
                    <li onClick={()=>setFilter('happy')}  className={` ${filter==='happy'? 'text-black font-bold'  : ''} cursor-pointer `}>Happy</li>
                    <li onClick={()=>setFilter('blog')}  className={` ${filter==='blog'? 'text-black font-bold'  : ''} cursor-pointer `}>Blog</li>
                    <li onClick={()=>setFilter('work')}   className={` ${filter==='work'? 'text-black font-bold'  : ''} cursor-pointer `}>Work</li>
                </ul>
            </div>

            <div className="carousel  overflow-x-hidden cursor-grab py-[20px]">
            <motion.div variants={cardsVraints} initial= 'from' animate='to' drag='x' dragConstraints={{ right:0 , left:-width }} ref={ref} className="img-cards mt-[50px] flex gap-[20px] ">
                <Cards filter={{ filter }} />
            </motion.div>
            </div>
            <div className="blogs mb-[50px] flex-wrap lg:items-start items-center lg:justify-start justify-center  mt-[50px] flex gap-[20px] ">
                <div className="blog w-[400px] h-auto shadow-2xl flex-col flex justify-center items-center">
                    <div className="img rounded-xl overflow-hidden mt-[10px] w-[95%] flex items-center justify-center">
                        <img src={post1} alt="" className='w-[100%] object-cover' />
                    </div>
                    <div className="desc p-[20px] flex flex-col gap-[15px]">
                        <h1 className='text-[35px]'>There are many variations</h1>
                        <p>11 March 2018 <span className='text-violet-600 font-bold'> By ANDRO</span></p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, non!nulla lobortis bibendum netus primis fames. Lobortis ultricies. it sagittis vulputate laoreet sodales tortor.</p>
                    </div>
                </div>

                <div className="blog w-[400px] h-auto shadow-2xl flex-col flex justify-center items-center">
                    <div className="img rounded-xl overflow-hidden mt-[10px] w-[95%] flex items-center justify-center">
                        <img src={post2} alt="" className='w-[100%] object-cover' />
                    </div>
                    <div className="desc p-[20px] flex flex-col gap-[15px]">
                        <h1 className='text-[35px]'>There are many variations</h1>
                        <p>11 March 2018 <span className='text-violet-600 font-bold'> By ANDRO</span></p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, non!nulla lobortis bibendum netus primis fames. Lobortis ultricies. it sagittis vulputate laoreet sodales tortor.</p>
                    </div>
                </div>

                <div className="blog w-[400px] h-auto shadow-2xl flex-col flex justify-center items-center">
                    <div className="img rounded-xl overflow-hidden mt-[10px] w-[95%] flex items-center justify-center">
                        <img src={post3} alt="" className='w-[100%] object-cover' />
                    </div>
                    <div className="desc p-[20px] flex flex-col gap-[15px]">
                        <h1 className='text-[35px]'>There are many variations</h1>
                        <p>11 March 2018 <span className='text-violet-600 font-bold'> By ANDRO</span></p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, non!nulla lobortis bibendum netus primis fames. Lobortis ultricies. it sagittis vulputate laoreet sodales tortor.</p>
                    </div>
                </div>
                
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Blog