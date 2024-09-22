import React from 'react'

const SuccessCard = () => {
  return (
    <div>
        <div className="sm:w-[265px] w-[80vw] ml-7 border rounded-xl my-16 sm:ml-0">
            <p className='py-6 rounded-t-xl bg-[#E3EFE0] font-semibold text-center text-[#255b18]'>100% Increment</p>
            <div className="py-5 flex gap-3 text-start">
                <p className='bg-[#DDDDDD] ml-2 h-fit w-fit px-4 py-3 rounded-full text-black text-xl'>M</p>
                <div>
                <p className='text-lg block  font-semibold'>Muzzammil Afridi</p>
                <p className=''>Web Developer</p>
                </div>
            </div>
            <p className='ml-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus sint molestiae asperiores magnam recusandae! Sit, recusandae sapiente? Quidem, voluptate quas.</p>

            <div className="flex justify-between px-4 py-5 sm:w-[265px] w-[80vw]">
                <div className="">
                    <p className='text-lg font-semibold mb-2'>From</p>
                    <img className='w-[90px]' src="./Images/ine.png" alt="img" />
                </div>
                <div className="">
                    <p className='text-lg font-semibold'>To</p>
                    <img className='h-[60px] sm:w-[100px]' src="./Images/tata.png" alt="img" />
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default SuccessCard