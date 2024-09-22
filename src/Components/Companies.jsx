import React from 'react'

const Companies = ({companies}) => {
  return (
    <div>
        <h2 className='text-4xl sm:text-5xl sm:font-bold text-center py-5 font-bold text-[#5A4BDA]'>Hiring Companies</h2>
        <p className='text-center pb-10 text-xl'>Are you ready to be hired by the finest companies?</p>
        <div className="grid grid-cols-3 sm:grid-cols-5 w-screen  sm:mx-[20px]">
       {
        companies.map((elem,idx)=>
        <div key={idx} className=" py-3 gap-5 justify-center mx-auto flex-wrap w-screen">
            
        <img className='h-8 sm:h-11' src={elem.img} alt="img" />
        
    </div>)
       }
       </div>
    </div>
  )
}

export default Companies