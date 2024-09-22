import React from 'react'

const StoryHOF = () => {
  return (
    <div className='bg-[#5A4BDA] w-[80vw] ml-7 sm:w-[90vw] sm:ml-[3vw] rounded-2xl mt-5'>
        <h2 className='text-5xl text-center py-20 px-6 font-bold'>Feature your story on Hall of Fame</h2>
        <div className="flex flex-col sm:flex-row px-5">
        <div className="px-6">
            <span className='px-[17px] text-black text-xl py-2 rounded-full bg-white mr-4 '>1</span>
            <span className='text-xl font-semibold'>Login with us</span>
            <p className='mt-3 pb-5  ml-16'>Login now to register yourself and be part of our prestigious Hall Of Fame</p>
        </div>
        <div className="px-6">
        <span className='px-[17px] text-black text-xl py-2 rounded-full bg-white mr-4 '>2</span>
            <span className='text-xl font-semibold'>Share your story</span>
            <p className='mt-3 pb-5  ml-16'>Share your valuable experience with others so that they too can make their dreams turn to reality

</p>
        </div>
        <div className="px-6"><span className='px-[17px] text-black text-xl py-2 rounded-full bg-white mr-4 '>3</span>
            <span className='text-xl font-semibold'>Get yourself in Hall of Fame</span>
            <p className='mt-3 pb-5  ml-16'>You rightfully deserve this spot in the Hall Of Fame for putting in consistent efforts.</p></div>
    </div>
    </div>
  )
}

export default StoryHOF