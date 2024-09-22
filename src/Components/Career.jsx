import React from 'react'

const Career = () => {
  return (

    <div className='flex w-screen'>
        <img className='h-[80vh] hidden sm:block'  src="./Images/career-transition-bg.png" alt="img" />
    <div className='flex  px-10 py-10 flex-col gap-8 '>
        <h2 className='text-3xl pt-10 text-[#5A4BDA] font-bold'>Successful Career Transitions</h2>
        <p className='w-[70vw] sm:w-[40vw] text-xl text-gray-500'>PW Skills has enabled 10k+ candidates to transition to data sciences, data analytics, big data and so on smoothly.</p>
        <button className='w-[80vw] sm:w-[220px] bg-[#5A4BDA] hover:bg-blue-800 font-semibold py-3 text-xl rounded-xl text-white'>Success Stories</button>
    </div>
    </div>
  )
}

export default Career