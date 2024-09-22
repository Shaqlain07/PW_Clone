import React from 'react'

const JobHero = () => {
  return (
    
    <div className='flex px-[3vw]'>
        <div className="sm:w-[70vw] flex ">
            <div>
            <h2 className='sm:text-6xl py-16 pl-4 sm:text-start text-4xl text-center font-bold'>Let's find your <br /> dream <span className='text-blue-800'>job</span> with <span className='text-blue-800' > PW Skills</span></h2>
            <div className="px-[3vw] sm:border-2  rounded-xl h-16 flex flex-col sm:flex-row items-center w-[60vw] gap-5 mb-32 sm:mb-0 sm:gap-32">
            <input className='outline-none border-2 p-3 w-[80vw] sm:w-fit mx-auto sm:p-0 sm:border-none shadow-xl rounded-lg sm:shadow-none text-start' type="text" placeholder='Job Title' />
            <input className='bg-white border-2 p-3 w-[80vw] sm:w-fit mx-auto sm:p-0 sm:border-none shadow-xl rounded-lg sm:shadow-none sm:border-l-2 border-l-none py-3 sm:pl-5  outline-none text-start' type="text" placeholder='Location' />
            <button className=' bg-[#4437B8] hover:bg-blue-700 text-white sm:px-10 w-[80vw] mx-auto py-3 sm:py-0 relative sm:right-14  sm:h-10 rounded-lg'>Search</button>
        </div>
        </div>
        </div>
        <div className="w-[30vw] hidden sm:block py-4">
            <img className='h-[80vh] w-[90%] ' src="./Images/hero-banner-grid-mobile.png" alt="" />
        </div>
      
    </div>

  )
}

export default JobHero