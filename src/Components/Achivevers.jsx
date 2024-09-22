import React from 'react'

const Achivevers = ({achiversData}) => {
    const myStyle = {
        backgroundImage:
            "url('./Images/company-illustration.svg')",
        height: "fit-Content",
        marginTop: "-70px",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
  return (
    <div>
        <h4 className='text-4xl mb-10 pb-10 text-center font-bold'>Where our achievers are?</h4>
        <div className="grid grid-cols-3 sm:grid-cols-5 sm:pl-10 gap-5 space-y-6 py-10" style={myStyle}>
          {achiversData.map((elem,idx)=> <img key={idx} className='w-[90px] sm:w-[110px]' src={elem.img} alt="img" />)}
         
        </div>
    </div>
  )
}

export default Achivevers