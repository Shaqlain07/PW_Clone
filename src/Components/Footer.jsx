import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#1B2124] pl-7 items-start flex flex-col gap-5 py-10 text-white sm:grid sm:grid-cols-3  '>
      <div className='flex flex-col gap-3 items-start'>
      <img className='h-12' src="./Images/PWSkills-white.png" alt="img" />
      <p>support@pwskills.com</p>
      <p>+918867917516</p>

      <div className="space-x-3 ">
        <span>Logo</span>
        <span>Logo</span>
        <span>Logo</span>
      </div>

      <img className='mt-5' src="./Images/iso-9001-2015.svg" alt="img" />

      </div>
<div>
      <h4 className='text-2xl font-semibold   sm:relative sm:top-2'>Company</h4>
      <div className='h-1 mt-3 rounded-full w-[80vw] bg-[#E97862] sm:w-[30vw] sm:mt-5'></div>

      <div className="grid grid-cols-2 mt-10 gap-2">
        <a href="#">About us</a>
        <a href="#">FAQ</a>
        <a href="#">Privacy policy</a>
        <a href="#">Contact us</a>
        <a href="#">Job assistance</a>
        <a href="#">Terms and condition</a>
      </div>
      </div>

      <div className='pr-6'>
      <h4 className='text-2xl font-semibold sm:relative sm:top-2'>Products</h4>
      <div className='h-1 mt-3 rounded-full w-[80vw] bg-[#E97862] sm:w-[30vw] sm:mt-5'></div>

      <div className="grid grid-cols-2 mt-10 gap-2">
        <a href="#">About us</a>
        <a href="#">FAQ</a>
        <a href="#">Privacy policy</a>
        <a href="#">Contact us</a>
        <a href="#">Job assistance</a>
        <a href="#">Terms and condition</a>
      </div>
      </div>
    </div>
  )
}

export default Footer