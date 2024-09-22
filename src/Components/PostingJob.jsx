import React from 'react'
import StaircaseBox from './StaircaseBox'

const PostingJob = () => {
  return (
    <div className='bg-[#614FDF] py-8 text-white'>
    <h3 className='text-3xl font-bold text-center  sm:text-5xl'>Steps For Posting A Job</h3>

    <div className="flex flex-col items-center my-10 sm:flex-row gap-5 sm:px-10 text-center justify-center">
       
        <StaircaseBox img = "./Images/bag-icon.svg" text="Post a job" steps="01"/>
        <StaircaseBox img = "./Images/verified-icon.svg" text="Get verification from PW Skills" steps="02"/>
        <StaircaseBox img = "./Images/gift-icon.svg" text="Get rewards" steps="03"/>
  
    </div>
</div>
  )
}

export default PostingJob