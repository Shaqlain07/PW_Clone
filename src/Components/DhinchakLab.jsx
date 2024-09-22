import React from 'react'

const DhinchakLab = ({dhinchakLabData}) => {
  return (
    <div className='px-[3vw]'>
        <h2 className='text-3xl font-semibold py-8'>Dhinchak Labs</h2>
        <div className="flex flex-col sm:flex-row  ">
            <div className="sm:w-[35vw] h-16 flex sm:flex-col items-center pr-8 sm:gap-5 ">
                <a  href="#"><p className='w-28 text-center ' >Programming</p></a>
                <a  href="#"><p className='w-28 text-center '>Data Science</p></a>
                <a  href="#"><p className='w-40 text-center ' >Web Development</p></a>
                <a href="#"><p className='w-28 text-center' >Big Data</p></a>
                <a href="#"><p className='w-28 text-center' >Data Analytics</p></a>
            </div>
            <div className="flex mt-24  gap-5 justify-center sm:relative bottom-28  flex-wrap">
              { dhinchakLabData.map((elem, idx)=> <div key={idx} className="flex shadow-black bg-slate-800 rounded-lg hover:bg-black hover:border border-green-800 shadow-xl h-24 w-[80vw] sm:w-60 items-center gap-7">
                    <img className='w-12 ml-9' src={elem.img} alt="img" />
                    <p className='text-xl '>{elem.name}</p>
                </div>)}
            </div>
        </div>


        <div className="pb-5">
            <img src="./Images/startlab-bg.png" alt="img" />
            <p className='text-center text-2xl'>Experience PW Skills Labs for Limitless Learning</p>
            <button className='bg-[#B058AC] relative left-[30vw] px-7 sm:px-10 py-4 text-xl my-5 rounded-lg sm:left-[40vw]'>Start your lab</button>
        </div>
    </div>
  )
}

export default DhinchakLab