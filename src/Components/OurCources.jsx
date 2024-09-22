import React from 'react'
import OurCoursesss from './OurCoursesss'

const OurCources = ({showCaseData, coursesData}) => {
  return (
    <div className='px-[4vw] my-10'>
        <div className="h-10 items-center flex justify-center sm:justify-between">
        <h2 className='text-4xl  font-semibold'>Our Courses</h2>
        <a className='hidden sm:block' href="#">View all</a>
        </div>
        <div className="mt-9 mb-4 space-x-6">
            <a className='text-xl pb-4 hover:border-b-2 border-black' href="#">Trending</a>
            <a className='text-xl pb-4 hover:border-b-2 border-black' href="#">Live</a>
            <a className='text-xl pb-4 hover:border-b-2 border-black' href="#">Community</a>
        </div>
        <div className="border-2"></div>

        <OurCoursesss coursesData={coursesData}/>
    </div>
  )
}

export default OurCources