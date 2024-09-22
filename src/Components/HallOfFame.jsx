import React from 'react'
import HallOfFameHeader from './HallOfFameHeader'
import HOFHero from './HOFHero'
import Achivevers from './Achivevers'
import StoryHOF from './StoryHOF'
import HOFPeople from './HOFPeople'
import Footer from './Footer'

const HallOfFame = ({achiversData, achPeopleData}) => {
  return (
    <div className='bg-black text-white px-3'>
        <HallOfFameHeader/>
        <HOFHero/>
        <Achivevers achiversData={achiversData}/>
        <StoryHOF/>
        <HOFPeople achPeopleData = {achPeopleData}/>
        <Footer/>
    </div>
  )
}

export default HallOfFame