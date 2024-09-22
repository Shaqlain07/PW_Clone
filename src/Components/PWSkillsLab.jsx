import React from 'react'
import Header from './Header'
import Nav from './Nav'

import LabsHero from './LabsHero'
import LabsFeatures from './LabsFeatures'
import DhinchakLab from './DhinchakLab'
import Footer from './Footer'

const PWSkillsLab = ({headerData, inp, img, login, btnstyle, mystyle, dhinchakLabData}) => {
  return (
    <div className='bg-[#18111C] text-white'>
      <Header headerData = {headerData} inp={inp} img = {img} login="Login" mystyle={mystyle} btnstyle={btnstyle}/>
      <LabsHero/>
      <LabsFeatures/>
      <DhinchakLab dhinchakLabData={dhinchakLabData}/>
      <Footer/>
    </div>
  )
}

export default PWSkillsLab