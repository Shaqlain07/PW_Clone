import React from 'react'

const JobCat = ({jobCat}) => {
  return (
    <div className=' py-5'>
        <h3 className='text-3xl px-10  mb-10 font-bold text-center'>Many Many Job Categories Of The Day</h3>
        <div className="grid px-3 grid-cols-2  sm:grid-cols-3 bg-[#FDFDFD] gap-5 rounded-lg">

            {
                jobCat.map((elem,idx)=><p key={idx} className='py-5  border bg-white  shadow-2xl   w-[44vw] sm:w-[30vw] rounded-lg text-center '>{elem.name}</p>)
            }
        </div>
        <p className='text-center mt-10 text-xl text-gray-600'>and more...</p>

    </div>
  )
}

export default JobCat