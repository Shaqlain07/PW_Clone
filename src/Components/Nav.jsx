import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { IoMenu, IoClose, IoOpen } from 'react-icons/io5';


const Nav = ({navData, req}) => {
  const [isOpen,setIsOpen] = useState(false)
  const toggle = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div className='min-h-fit  border border-gray-400'>
   <div className='flex pl-[3vw] justify-between items-center'>
   <div className="h-[10vh]  flex items-center justify-center ">
    <img className='h-full' src="./Images/PWSkills-logo.png" alt="" />
   </div>

     <nav className='sm:flex  w-[85vw] h-[18vh] px-12 items-center hidden justify-between  gap-5 text-lg'>

            <div className="space-x-6">
            <NavLink to="/" className={({isActive}) => ` text-lg font-semibold ${isActive ? "text-[#D2614B]" : "text-gray-700"}   duration-200 border-b border-gray-100 hover:bg-gray-50
            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            } >{navData[0].first}</NavLink>
            <NavLink to="/pwskillslab" className={({isActive}) => ` text-lg font-semibold ${isActive ? "text-[#8F4CBF]" : "text-gray-700"}   duration-200 border-b border-gray-100 hover:bg-gray-50
            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            } >{navData[0].second}</NavLink>
            <NavLink to="/jobportal" className={({isActive}) => ` text-lg font-semibold ${isActive ? "text-[#5A4BDA]" : "text-gray-700"}   duration-200 border-b border-gray-100 hover:bg-gray-50
            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            } >{navData[0].third}</NavLink>
            <NavLink to="/becomeanaffliate" className={({isActive}) => ` text-lg font-semibold ${isActive ? "text-[#5A4BDA]" : "text-gray-700"}   duration-200 border-b border-gray-100 hover:bg-gray-50
            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            } >{navData[0].forth}</NavLink>
            <NavLink to="/halloffame" className={({isActive}) => ` text-lg font-semibold ${isActive ? "text-[#D2614B]" : "text-gray-700"}   duration-200 border-b border-gray-100 hover:bg-gray-50
            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            } >{navData[0].sixth}</NavLink>
                {console.log(navData[0].sixth)}
        
            </div>
            <div className="space-x-7">
            <a  href="#">{req}</a>
        
            <a className='bg-[#4437B8] text-white px-6 py-3 rounded-lg' href="#">Login</a>
            {/* <a href="#" className='px-5 py-4 text-xl font-semibold rounded-full bg-cyan-400'>M</a> */}
         
            </div>
             </nav>

             
     <div className="sm:hidden pr-5 py-2">
{ isOpen?<IoClose onClick={()=>toggle()} size={30} /> :<IoMenu onClick={()=>toggle()} size={30}/> } 
<br />
</div>


   </div>

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

export default Nav