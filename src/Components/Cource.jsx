import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Showcase from './Showcase'
import OurCources from './OurCources'
import Ecosystem from './Ecosystem'
import Guiding from './Guiding'
import OurAchivement from './OurAchivement'
import Succses from './Succses'
import FreqAskQus from './FreqAskQus'
import Footer from './Footer'



function Cource({showCaseData, coursesData, ecosystemData,OurAchivementData, successData, headerData,inp,img, login,btnstyle,mystyle,freqAskQus}) {
  return (
    <div className='bg-[#FCFCFC]'>
     <Header headerData = {headerData} inp={inp} img = {img} login={login} mystyle={mystyle} btnstyle={btnstyle}/>
    <Hero />
    <Showcase showCaseData={showCaseData} />
    <OurCources coursesData={coursesData}/>
    <Ecosystem ecosystemData={ecosystemData}/>
    <Guiding/>
    <OurAchivement OurAchivementData={OurAchivementData}/>
    <Succses successData={successData}/>
    <FreqAskQus freqAskQus={freqAskQus}/>
    <Footer/>
    </div>
  )
}

export default Cource