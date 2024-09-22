import React from 'react'

const AffiliateHero = () => {
  return (
    <>
    <div className='bg-[#5A4BDA] text-white  flex flex-col gap-10 sm:flex-row '>
        <div className="w-[80vw] sm:mt-14 sm:h-screen mt-5">
            <div className=" flex flex-col sm:mt-16 items-center mb-10 justify-center pl-5 sm:items-start w-screen px-4 sm:w-fit">
            <h3 className='text-center text-3xl mx-auto sm:w-[35vw]  font-semibold py-4 sm:text-start sm:text-5xl'>Attain financial freedom by joining our affiliate program</h3>
            <button className=' w-60 py-3 rounded-xl sm:ml-4 bg-[#EDB84F] text-2xl text-black font-semibold mt-5 '>Register with us</button>
            </div>
        </div>
        <div className="w-[80vw]  sm:mt-14 mx-auto">
            <img src="./Images/hero-right.png" alt="img" />
        </div>
    </div>


    <div className="w-[75vw] h-44  items-center justify-evenly relative bottom-20 hidden sm:flex rounded-xl bg-white shadow-xl mx-auto mb-9">
      <div className="text-center">
        <p className='text-3xl font-semibold'>7,00,000+</p>
        <p className='text-3xl font-semibold text-blue-700'>Students enrolled</p>
      </div>
      <div className="text-center">
        <p className='text-3xl font-semibold' >600+</p>
        <p className='text-3xl font-semibold text-blue-700'>Different courses</p>
      </div>
      <div className="text-center">
        <p className='text-3xl font-semibold'>10,000+</p>
        <p className='text-3xl font-semibold text-blue-700'>Successful transition</p>
      </div>
    </div>
    </>
  )
}

export default AffiliateHero