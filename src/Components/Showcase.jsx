import React from 'react'
import ShowcaseBoxes from './ShowcaseBoxes';

const Showcase = ({showCaseData}) => {
  return (
    <div className='min-h-[70vh] sm:min-h-52 sm:h-fit   sm:mt-9  flex flex-col justify-center items-center py-5 gap-5 px-4 sm:flex-row'>
      <ShowcaseBoxes showCaseData={showCaseData}/>
      
    </div>
  )
}
export default Showcase;