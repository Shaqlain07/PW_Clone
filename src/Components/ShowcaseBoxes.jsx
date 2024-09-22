import React from 'react'

const ShowcaseBoxes = ({showCaseData}) => {
  return (
    <div className='flex w-screen flex-wrap gap-5 justify-center items-center'>
       
        
    {showCaseData.map((elem,idx)=><div key={idx} className="h-fit shadow  rounded-xl w-[70vw] flex py-4 px-5 gap-5 sm:w-[280px]"><img className='h-[55px]' src={elem.img} alt="img" />
    <div className="">
      <h2>{elem.percentage}</h2>
      <p>{elem.detail}</p>
    </div>
    </div>)}
    
    
    </div>
  )
}

export default ShowcaseBoxes