import React from 'react'

const Recruiter = () => {
  return (
    <div className='px-[3vw] sm:px-4  py-10 '>
        <h3 className='text-3xl sm:text-5xl font-semibold text-[#5A4BDA]'>Recruiters Love Our Portal...</h3>
        <p className='mt-3 text-xl'>Here's why</p>
        <div className="sm:flex flex-row-reverse">
            <div className="">
                <img src="./Images/recruiter-love-portal-side.png" alt="img" />
            </div>
            <div>
            <div className="">
                <div className="flex gap-5 mb-6 mt-10 items-center">
                <img src="./Images/graph-icon.png" alt="" />
                <p className='w-[65vw]  text-lg font-semibold'>Recruiters get rewards after their job is verified by PW Skills</p>
                </div>
            </div>
            <div className="">
                <div className="flex gap-5 mb-6 items-center">
                <img src="./Images/hand-meet.png" alt="" />
                <p className='w-[65vw]  text-lg font-semibold'>Recruiters receive rewards after candidates get hired</p>
                </div>
            </div>
            <div className="">
                <div className="flex gap-5 items-center">
                <img src="./Images/document-icon.png" alt="img" />
                <p className='w-[65vw]  text-lg font-semibold'>Hire job-ready candidates and save recruitment time</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Recruiter