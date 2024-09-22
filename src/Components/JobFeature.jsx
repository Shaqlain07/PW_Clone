import React from 'react'

const LabsFeatures = () => {
  return (
    <div>
        <h2 className='text-3xl my-5 text-center'>Mast Features</h2>
        <p className='text-center py-4'><span className='text-xl '>CODESPACES </span>walked so that PW Skills Lab could run.</p>

        <div className="flex flex-col py-8 items-center justify-center sm:flex-row">
            <div className="flex flex-col sm:w-[30vw] h-40 w-[93vw] px-2 border-[1px] border-[#B85AA6] items-center justify-center gap-4">
                <h3 className='text-2xl font-semibold'>In-Browser IDE</h3>
                <p>Feels like running a supercomputer 🐆 in snail-like 🐌 machine</p>
            </div>
            <div className="flex flex-col  sm:w-[30vw] h-40 w-[93vw] px-2 border-[1px] border-[#B85AA6] items-center justify-center gap-4">
                <h3 className='text-2xl font-semibold'>Run and Deploy</h3>
                <p>Don't tell your friends, lab will run faster</p>
            </div>
            <div className="flex flex-col sm:w-[30vw] h-40 w-[93vw] px-2 border-[1px] border-[#B85AA6] items-center justify-center gap-4">
                <h3 className='text-2xl font-semibold'>Unlimited Labs</h3>
                <p>Is what happens when you use 100% of your brain.</p>
            </div>
        </div>
    </div>
  )
}

export default LabsFeatures