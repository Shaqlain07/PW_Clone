import React from 'react'

const Benifits = () => {
  return (
    <div>
        <h3 className='text-center mt-5 sm:mt-0 mb-5 text-3xl sm:text-5xl font-bold text-[#5A4BDA]'>Benefits</h3>
        <div className="w-[85vw] sm:w-[50vw] my-10 ml-8 items-center justify-center flex gap-5 h-fit pl-5 border shadow-xl rounded-xl">
            <img className='h-[120px] py-5' src="./Images/idea.png" alt="img" />
                <p className='pr-4'>Join our philanthropic force to spread affordable and practical knowledge across the globe</p>
            </div>
        <div className="w-[85vw] sm:ml-[46vw] sm:w-[50vw] my-10 ml-8 items-center justify-center flex gap-5 h-fit pl-5 border shadow-xl rounded-xl">
            <img className='h-[120px] py-5' src="./Images/travel.png" alt="img" />
                <p className='pr-4'>Financial freedom isn't a dream anymore whether it is your retirement plan or an impending vacation it is all possible with minimum efforts invested</p>
            </div>
        <div className="w-[85vw] sm:w-[50vw] my-10 ml-8 items-center justify-center flex gap-5 h-fit pl-5 border shadow-xl rounded-xl">
            <img className='h-[120px] py-5' src="./Images/caution.png" alt="img" />
                <p className='pr-4'>No investment is required to start which leads to no risks</p>
            </div>
        <div className="w-[85vw] sm:w-[50vw] sm:ml-[46vw] my-10 ml-8 items-center justify-center flex gap-5 h-fit pl-5 border shadow-xl rounded-xl">
            <img className='h-[120px] py-5' src="./Images/money.png" alt="img" />
                <p className='pr-4'>Generate massive amounts of passive income with minimum efforts</p>
            </div>
    </div>
  )
}

export default Benifits