import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoMenu, IoClose, IoOpen } from 'react-icons/io5';
import { useState } from 'react';


const HallOfFameHeader = () => {
        const [isOpen,setIsOpen] = useState(false)
        const toggle = ()=>{
          setIsOpen(!isOpen)
        }
  return (
    <div className='sm:h-[28vh] min-h-[17vh] bg-transparent sm:px-16 px-6 shadow-lg' >
    <div className="flex items-center justify-between h-1/2">
    <img className='sm:h-3/4 h-[12vh] ' src="./Images/PWSkills-white.png" alt="" />
      

        <button className='text-white hidden bg-[#5A4BDA] px-10 py-3 rounded-xl text-xl sm:inline-block' >Login</button>
        <div className="sm:hidden">
{ isOpen?<IoClose onClick={()=>toggle()} size={30} /> :<IoMenu onClick={()=>toggle()} size={30}/> } 
</div>
    </div>

   
  
   <nav className='sm:flex h-1/2 items-center hidden justify-between'>
    <NavLink className={({isActive}) => ` text-lg font-semibold ${isActive ? "text-green-700" : "text-gray-700"}   duration-200 border-b border-gray-100 hover:bg-gray-50
            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            } to="/">Home</NavLink>
    <NavLink className={({isActive}) => ` text-lg font-semibold ${isActive ? "text-green-700" : "text-gray-700"}   duration-200 border-b border-gray-100 hover:bg-gray-50
            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }  to="/">Courses</NavLink>
    <NavLink className={({isActive}) => ` text-lg font-semibold ${isActive ? "text-green-700" : "text-gray-700"}   duration-200 border-b border-gray-100 hover:bg-gray-50
            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }  to="/pwskillslab">PW Skills Lab</NavLink>
    <NavLink className={({isActive}) => ` text-lg font-semibold ${isActive ? "text-green-700" : "text-gray-700"}   duration-200 border-b border-gray-100 hover:bg-gray-50
            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }  to="/jobportal">Job Portal</NavLink>
  
    <NavLink className={({isActive}) => ` text-lg font-semibold ${isActive ? "text-green-700" : "text-gray-700"}   duration-200 border-b border-gray-100 hover:bg-gray-50
            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }  to="/becomeanaffliate">Become an affiliate</NavLink>
    <NavLink className={({isActive}) => ` text-lg font-semibold ${isActive ? "text-green-700" : "text-gray-700"}   duration-200 border-b border-gray-100 hover:bg-gray-50
            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }  to="/halloffame">Hall of fame</NavLink>
       
</nav>

{isOpen && (
  <div className='flex flex-col text-center'>
    <NavLink className='hover:bg-cyan-800 py-2 rounded-xl' to='/'>Cource</NavLink>
    <NavLink className='hover:bg-cyan-800 py-2 rounded-xl' to='/pwskillslab'>PW Skills Lab</NavLink>
    <NavLink className='hover:bg-cyan-800 py-2 rounded-xl' to='/jobportal'>Job Portal</NavLink>
    <NavLink className='hover:bg-cyan-800 py-2 rounded-xl' to='/becomeanaffliate'>Become an Affliate</NavLink>
    <NavLink className='hover:bg-cyan-800 py-2 rounded-xl' to='/halloffame'>Hall of Fame</NavLink>
   
  </div>
)}
  
</div>
  )
}

export default HallOfFameHeader