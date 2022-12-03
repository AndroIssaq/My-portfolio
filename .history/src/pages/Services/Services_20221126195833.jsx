import React from 'react'
import './Services.css'
const Services = () => {
  return (
    <section className='mt-[50px]' >
        <div className="container w-[85%] mx-auto ">
            <div className="content flex items-center justify-center flex-col">
                <div className="title flex items-center justify-center flex-col gap-[30px]">
                    <div className="head-title w-[200px] bg-green-200 flex items-center justify-center">
                        <h1 className='p-[10px]'>What I Can Do For You</h1>
                    </div>
                    <div className="lower-title flex flex-col items-center justify-center ">
                        <h1 className='text-[40px] text-blue-900 font-bold'>Services I Can Help You With</h1>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>    
    </section>
  )
}

export default Services