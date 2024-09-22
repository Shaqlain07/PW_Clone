import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoMenu, IoClose, IoOpen } from 'react-icons/io5';


const Header = ({headerData, inp,img, login,btnstyle,mystyle}) => {

  const [isOpen,setIsOpen] = useState(false)
  const toggle = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div className='sm:h-[28vh] min-h-[17vh] bg-transparent sm:px-16 px-6 shadow-lg' style={inp==="none" ? mystyle: {backgroundColor: "transparent"}}>
        <div className="flex items-center justify-between h-1/2">
            <img className='sm:h-3/4 h-[8vh] mt-7 sm:mt-0' src={img} alt="img" />
            {inp === 'none' ? "" : <input className='px-14 w-[55vw] hidden sm:inline-block outline-none border-[0.8px] border-gray rounded-lg py-3' type="text" placeholder='Search by Product title' />
 }
            <Link to="/login" className='bg-orange-400 hidden text-white px-10 py-3 rounded-xl text-xl sm:inline-block' style={inp==="none" ? btnstyle: {backgroundColor: "#D2614B"}}>{login}</Link>
            <div className="sm:hidden">
{ isOpen?<IoClose className='mt-5 sm:mt-0' onClick={()=>toggle()} size={30} /> :<IoMenu className='mt-5 sm:mt-0' onClick={()=>toggle()} size={30}/> } 
</div>
        </div>
      {
        headerData.map((elem, idx)=>  <nav key={idx} className='sm:flex h-1/2 items-center hidden justify-between'>
        <NavLink className={({isActive}) => ` text-lg font-semibold ${isActive ? "text-green-700" : "text-gray-700"}   duration-200 border-b border-gray-100 hover:bg-gray-50
            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            } to="/">{elem.first}</NavLink>
        <NavLink to="/pwskillslab" className={({isActive}) => ` text-lg font-semibold ${isActive ? "text-green-700" : "text-gray-700"}   duration-200 border-b border-gray-100 hover:bg-gray-50
            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }>{elem.second}</NavLink>
        <NavLink to="/jobportal" className={({isActive}) => ` text-lg font-semibold ${isActive ? "text-green-700" : "text-gray-700"}   duration-200 border-b border-gray-100 hover:bg-gray-50
            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            } >{elem.third}</NavLink>
       
        <NavLink to="/becomeanaffliate" className={({isActive}) => ` text-lg font-semibold ${isActive ? "text-green-700" : "text-gray-700"}   duration-200 border-b border-gray-100 hover:bg-gray-50
            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }>{elem.fifth}</NavLink>
        <NavLink to="/halloffame" className={({isActive}) => ` text-lg font-semibold ${isActive ? "text-green-700" : "text-gray-700"}   duration-200 border-b border-gray-100 hover:bg-gray-50
            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }>{elem.sixth}</NavLink>

           
    </nav>)
      }

{isOpen && (
  <div className='flex flex-col text-start '>
    <NavLink className='hover:bg-gray-200 p-2 rounded-xl' to='/'>Cource</NavLink>
    <NavLink className='hover:bg-gray-200 p-2 rounded-xl' to='/pwskillslab'>PW Skills Lab</NavLink>
    <NavLink className='hover:bg-gray-200 p-2 rounded-xl' to='/jobportal'>Job Portal</NavLink>
    <NavLink className='hover:bg-gray-200 p-2 rounded-xl' to='/becomeanaffliate'>Become an Affliate</NavLink>
    <NavLink className='hover:bg-gray-200 p-2 rounded-xl' to='/halloffame'>Hall of Fame</NavLink>
   
  </div>
)}
    </div>
  )
}

export default Header