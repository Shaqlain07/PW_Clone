import React from 'react'

const StaircaseBox = ({img, text, steps}) => {
  return (
    <div className="w-[85vw] h-[250px] rounded-xl  relative bg-[#F1EFFF]">
    <p className='absolute top-3 right-3 text-2xl font-bold text-gray-600'>{steps}</p>
    <div className="text-gray-500 flex flex-col h-full gap-6 items-center justify-center">
    <img className='h-16' src={img} alt="img" />
    <p className='text-2xl font-bold'>{text}</p>
    </div>
</div>
  )
}

export default StaircaseBox