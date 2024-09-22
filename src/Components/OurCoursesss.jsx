import React from 'react'

const OurCoursesss = ({coursesData}) => {
  return (
    <div className='flex flex-wrap gap-5 min-h-fit bg-[#FEFAF9] justify-center mt-10'>

     {coursesData.map((elem, idx)=>
        <div key={idx} className="flex w-[75vw] shadow-lg rounded-lg flex-col gap-3 sm:h-screen max-h-[94vh] justify-between text-xl sm:w-[28vw] ">
        <img className='rounded-tl-2xl rounded-tr-2xl' src={elem.img} alt="img" />
        <div className=" pl-5 flex flex-col gap-3">
        <h3>{elem.batchName}</h3>
        <h4>Vishwa Mohan <span>and 1 more</span></h4>
        <h4>Starts on 10 Mar 2024</h4>
        <h4>Core Projects | Skill Elevation:Practice <span>& More</span></h4>
        </div>

        <div className="flex gap-5 pl-5">
            <h3>3500.00 <span>4999.00</span></h3>
            <span>30% Discount</span>
        </div>
        <div className="flex justify-between items-center">
            <button  className='w-1/2 py-2 border-[1px] border-[#D2614B] rounded-bl-xl text-[#D2614B]'>Explore</button>
            <button className='w-1/2 py-2 rounded-br-xl text-white bg-[#D2614B]'>Enroll Now</button>
        </div>
    </div>)}

    </div>
  )
}

export default OurCoursesss