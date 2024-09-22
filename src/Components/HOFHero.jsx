import React from 'react'

const HOFHero = () => {
  return (
    <div className='w-[95vw] flex flex-col sm:flex-row py-10  sm:px-14 justify-center gap-20'>
        <div className="flex mt-8 sm:w-[50vw] flex-col gap-12">
            <h2 className='text-6xl  font-serif text-start font-bold'>PW Skills Hall of Fame</h2>
            <p className='text-justify'>We are proud of our achievers to have proved their success through hard-work and dedication which has enabled them to make their dreams come true. You too can be part of the PW Skills achiever group only if you stay consistent and be determined.</p>
            <button className='bg-[#4437B8] w-fit px-5 py-3 rounded-xl'>Share your story</button>
        </div>
        <div className="w-[50vw] hidden sm:flex  justify-">
            <img className='p-5 ml-10 mb-5' src="./Images/hall-of-fame-hero-img.svg" alt="" />
        </div>
    </div>
  )
}

export default HOFHero