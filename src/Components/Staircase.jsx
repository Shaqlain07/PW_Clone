import React from 'react'
import StaircaseBox from './StaircaseBox'

const Staircase = () => {
    const img = "./Images/user_default_image.png"
    const text = "Create your profile"
    const steps = "01"
  return (
    <div className='bg-[#614FDF] py-8 text-white'>
        <h3 className='text-3xl font-bold text-center  sm:text-5xl'>Staircase To Your Dream Job</h3>
        <p className='text-center mb-5 text-xl'>Job seekers, we keep it simple!</p>
        <div className="flex flex-col items-center sm:flex-row gap-5 sm:px-10 text-center justify-center">
            <StaircaseBox img = {img}  text={text} steps={steps}/>
            <StaircaseBox img = "./Images/bulb.png" text="Enroll in job guarantee program" steps="02"/>
            <StaircaseBox img = "./Images/map.png" text="Constant support till you get a job" steps="03"/>
      
        </div>
    </div>
  )
}

export default Staircase