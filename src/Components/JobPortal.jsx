import React from 'react'
import Nav from './Nav'
import JobHero from './JobHero'
import Companies from './Companies'
import Staircase from './Staircase'
import Career from './Career'
import JobCat from './JobCat'
import JobBless from './JobBless'
import Recruiter from './Recruiter'
import PostingJob from './PostingJob'
import Footer from './Footer'


const JobPortal = ({navData, req,  companies, jobCat,jobData}) => {

 
  return (
   
    <div>
         <Nav navData={navData} req = {req}/>
         <JobHero/>
         <Companies companies={companies}/>
         <Staircase />
         <Career/>
         <JobCat jobCat={jobCat}/>
         <JobBless jobData={jobData}/>
         <Recruiter/>
         <PostingJob/>
         <Footer/>
         
    </div>
  )
}

export default JobPortal