import React from 'react'

const JobBless = ({jobData}) => {
  return (
    <div className='mt-10 p y-7 bg-[#F1EFFF]'>
        <h2 className='text-3xl py-7 font-bold text-center text-[#5A4BDA]'>May Our Jobs Bless You</h2>
        <div className="flex my-5 flex-col pb-10 justify-center gap-8 sm:flex-row sm:flex-wrap items-center">
            {
                jobData.map((elem, idx)=><div key={idx} className="w-[85vw] sm:w-[30vw] h-52 rounded-lg relative  bg-white">
                <div className="flex px-5 pt-2 justify-between">
                    <div>
                        <h3 className='text-xl font-semibold'>{elem.jobTitle}</h3>
                        <p>{elem.companyName}</p>
                    </div>
                    <button  className='border px-6 rounded-lg'>Apply</button>
                </div>

                <div className="flex justify-between  px-5">
                    <div className='absolute bottom-2'>
                        <p>{elem.location}</p>
                        <p>{elem.experience}</p>
                    </div>
                    <div className='absolute bottom-2 right-4'>
                        <p>{elem.JobType}</p>
                        <p>{elem.package}</p>
                    </div>
                </div>


            </div>)
            }
        </div>
    </div>
  )
}

export default JobBless