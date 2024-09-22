import React from 'react'

const Ecosystem = ({ecosystemData}) => {
  return (
    <div className='flex items-center  min-h-[200vh] py-5 text-center justify-center sm:items-start flex-col w-full px-[5vw] sm:p-[3vw]  '>
      <div className="mb-5">
        <h2 className='text-center text-4xl font-semibold sm:text-start'>Explore Our Ecosystem</h2>
        <p className='text-slate-600 mt-4'>A one-stop destination for all your learning to placement needs
</p>
      </div>
        <div className="flex flex-wrap gap-5   sm:w-[550px]
       ">
        <div className="sm:grid relative sm:grid-cols-2 gap-5 flex flex-col items-center justify-center  w-[100vw] ">
       {ecosystemData.map((elem, idx)=>  <div key={idx} 
       
       className="flex  gap-4 py-4 rounded-xl w-[75vw] sm:w-[230px] h-[48vh] sm:h-[52vh] flex-col items-center justify-center bg-[#F0F8FB]
       ">
        <img className='w-[50px]' src={elem.img}alt="img" />
        <h3 className='text-2xl font-semibold'>{elem.title}</h3>
        <p className='text-slate-500'>{elem.desc}</p>
        <button className='bg-black text-white px-5 py-2 rounded-lg'>Explore</button>
        </div>)}
        </div>
       
       
        <div className="absolute right-5 hidden sm:block mt-[30vh] ">
                <img className='h-[74vh]' src="./Images/explore.jpg" alt="" />
        </div>
        </div>
   
  
    </div>
  )
}

export default Ecosystem