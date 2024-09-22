import React from 'react'

const HOFPeople = ({achPeopleData}) => {
  return (
    <div className='py-24'>
        <div className="flex flex-col gap-20 items-center">
          <h2 className='text-4xl text-center font-bold'>Achievers in Hall of Fame</h2>
          <p className='text-3xl'>252</p>
          <input className=' bg-gray-800 w-[88vw] text-white rounded-xl outline-none px-10 py-4 text-lg' type="text" placeholder='Find in Hall of Fame' />
        </div>
        <div className="flex  sm:flex-row sm:flex-wrap flex-col gap-y-28 gap-x-6 items-center justify-center pt-20 mt-10">
         

         {achPeopleData.map((elem, idx)=> <div key={idx} className="w-[88vw] transition-all		 hover:scale-105	 sm:w-[30vw] relative h-[320px] rounded-xl bg-[#171C24]">
              <img className='rounded-full h-36 absolute left-1/2 -translate-y-1/2 -translate-x-1/2 border-[4px] border-[#5A4BDA]' src={elem.img} alt="img" />
              <p className='mt-20 w-[80%] mx-auto'>{elem.details}</p>

              <p className='text-center text-xl font-bold mt-10'>{elem.name}</p>
              <p className='text-center  text-[#8AC33F]'>{elem.companyName}</p>
          </div>)}
 
        
         
         
      
        </div>
    </div>
  )
}

export default HOFPeople