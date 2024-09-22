import React from 'react'

const Login = () => {
  return (
    <div className='flex ml-7 '>
       <div className="hidden sm:block    w-[65vw] h-screen bg-[#F8FAFB] ">
        <img className='w-full h-full  ' src="./Images/signin-banner.svg" alt="" />
       </div>
       <div className="flex flex-col text-center gap-10 sm:px-8">
            <div className="">
                <img className='h-14 mt-9' src="./Images/PWSkills-logo.png" alt="img" />
            </div>
            <div className="">
                <h3 className='text-4xl font-semibold  mb-4 text-start'>Get Onboard and jumpstart your career!</h3>
                <p className='mr-5 text-gray-400 text-start'>Please enter your phone number to Loging/Register</p>
            </div>
            <div className="flex flex-col sm:items-center sm:justify-center relative  sm:right-28">
                <input type="text" className='w-[300px] outline-none pl-3 border-b border-gray-700 mb-3  pb-3' placeholder='Enter your mobile number' />
                <button className='py-3 bg-[#F2AEA1] hover:bg-[#f27d65]   text-white font-semibold w-[300px] rounded-xl'>Sent OTP</button>
            </div>
            <p className='sm:mr-52 mr-14 -mt-5 '>OR</p>
            <div className="sm:ml-[37px] sm:items-center ml-6   sm:justify-center gap-2 flex border mb-10 -mt-8 rounded-lg w-fit py-3 px-7">
              <img className='h-6 mt-1 ' src="./Images/download.png" alt="" />
              <p>Sign in with Google</p>
            </div>
       </div>
    </div>
  )
}

export default Login