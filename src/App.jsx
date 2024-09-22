import { useState } from 'react'
import './App.css'
import Cource from './Components/Cource'
import PWSkillsLab from './Components/PWSkillsLab'
import JobPortal from './Components/JobPortal'
import BecomeAnAffiliate from './Components/BecomeAnAffiliate.jsx'
import HallOfFame from './Components/HallOfFame'
import Guiding from './Components/Guiding'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'

function App() {
  const showCaseData = [
    {
      id:'1',
      img: './Images/statistics1.png',
      percentage: '55%',
      detail: 'Average Salary Hike'
    },
    {
      id:'2',
      img: './Images/statistics2.png',
      percentage: '600+',
      detail: 'Different Courses'
    },
    {
      id:'3',
      img: './Images/statistics3.png',
      percentage: '12000+',
      detail: 'Career Transitions'
    },

  ]

  const coursesData = [
    {
      id:'1',
      img:'./Images/decode.png',
      batchName:'Decode Python with DSA Course',
      faculties: 'Vishwa Mohan and 1 more',
      startingDate: 'Starts on 10 Mar 2024',

    },
    {
      id:'2',
      img:'./Images/java-with-dsa.png',
      batchName:'Decode Java with DSA Course',
      faculties: 'Vishwa Mohan and 1 more',
      startingDate: 'Starts on 10 Mar 2024',

    },
    {
      id:'3',
      img:'./Images/C++-with-dsa.png',
      batchName:'Decode C++ with DSA Course',
      faculties: 'Vishwa Mohan and 1 more',
      startingDate: 'Starts on 10 Mar 2024',

    },
  ]

  const ecosystemData =[
    {
      id:'1',
      img: './Images/products-icon1.png',
      title: 'PW Skills Lab',
      desc: 'Buying a new PC is no longer required, Access unlimited computing power!',

    },
    {
      id:'2',
      img: './Images/products-icon2.png',
      title: 'Experience Portal',
      desc: 'Self-paced portal prioritizes hands-on training with 570+ internship projects',

    },
    {
      id:'3',
      img: './Images/products-icon3.png',
      title: 'Hall Of Fame',
      desc: 'Our student placements and 100K+ career transitions speak volumes.',

    },
    {
      id:'4',
      img: './Images/products-icon4.png',
      title: 'Job Portal',
      desc: 'Use exceptional templates for a stand-out resume minus the sign up process.!',

    },
    {
      id:'5',
      img: './Images/products-icon5.png',
      title: 'Become an affiliate',
      desc: 'Explore affiliate marketing opportunities and attain financial freedom.',

    },

  ]

  const OurAchivementData = [
    {
      img: './Images/wipro.png',
    },
    {
      img: './Images/tata.png',
     
    },
    {
      img: './Images/verizo.png',

    },
    {
      img: './Images/Swigy.png',

    },
    {
      img: './Images/unac.png',

    },
    {
      img: './Images/wipro.png',
    },
    {
      img: './Images/tata.png',
     
    },
    {
      img: './Images/verizo.png',

    },
    {
      img: './Images/Swigy.png',

    },
    {
      img: './Images/unac.png',

    },
  ]
  
  const successData = [
    {
      increment:'100%',
      name:'Muzzammil Afridi',
      role:'Web Developer',
      imgFrom:'./Images/Swigy.png',
      imgTo:'./Images/redbus.png'

    },
    {
      increment:'50%',
      name:'Asif Iqbal',
      role:'SDE',
      imgFrom:'./Images/Swigy.png',
      imgTo:'./Images/redbus.png'

    },
    {
      increment:'450%',
      name:'Rehan Tahir',
      role:'Android Developer',
      imgFrom:'./Images/Swigy.png',
      imgTo:'./Images/redbus.png'

    },
    {
      increment:'600%',
      name:'Md Fahim Ahmad',
      role:'Data Analytic',
      imgFrom:'./Images/Swigy.png',
      imgTo:'./Images/redbus.png'

    },
    {
      increment:'60%',
      name:'Bibek ____',
      role:'Frontend Developer',
      imgFrom:'./Images/Swigy.png',
      imgTo:'./Images/redbus.png'

    },
    {
      increment:'100%',
      name:'Muzzammil Afridi',
      role:'Web Developer',
      imgFrom:'./Images/Swigy.png',
      imgTo:'./Images/redbus.png'

    },
   ,
    {
      increment:'100%',
      name:'Muzzammil Afridi',
      role:'Web Developer',
      imgFrom:'./Images/Swigy.png',
      imgTo:'./Images/redbus.png'

    },
    {
      increment:'100%',
      name:'Muzzammil Afridi',
      role:'Web Developer',
      imgFrom:'./Images/Swigy.png',
      imgTo:'./Images/redbus.png'

    },
    {
      increment:'100%',
      name:'Muzzammil Afridi',
      role:'Web Developer',
      imgFrom:'./Images/Swigy.png',
      imgTo:'./Images/redbus.png'

    },
  ]

  const headerData = [
    {
      first:'Cources',
   
      second:'PW Skils Lab',
   
      third:'Job Portal',
    
      fourth:'Experence Portal',
    
      fifth:'Become an Affliate',
    
      sixth:'Hall of Fame',
     
      
    }
  ]

  const dhinchakLabData = [
    {
      img:'./Images/c.jpg',
      name:'C'
    },
    {
      img:'./Images/c++.jpg',
      name:'C++'
    },
    {
      img:'./Images/go.jpg',
      name:'Go'
    },
    {
      img:'./Images/java.jpg',
      name:'Java'
    },
    {
      img:'./Images/python.jpg',
      name:'Python'
    },
    {
      img:'./Images/swiftPro.jpg',
      name:'Swift'
    },
    {
      img:'./Images/julia.jpg',
      name:'Julia'
    },
    {
      img:'./Images/kotlin.jpg',
      name:'Kotlin'
    },
    {
      img:'./Images/mongo+node.jpg',
      name:'MongoDB + Node.js'
    },
    {
      img:'./Images/mongo+python.jpg',
      name:'MongoDB + Python'
    },
    {
      img:'./Images/mysql.jpg',
      name:'MySQL'
    },
    {
      img:'./Images/mysql.jpg',
      name:'MySQL+Node'
    },
    {
      img:'./Images/Ruby.jpg',
      name:'Ruby'
    },
    {
      img:'./Images/scala.jpg',
      name:'Scala'
    },
    {
      img:'./Images/tpejs.jpg',
      name:'Typescript'
    },
  ]

  const navData = [
    {

      first:"Cources",
      second:"PW Skils Lab",
      third:"Job Portal",
      forth:"Become an Affliate",
      sixth:'Hall of Fame',
    }
  ]

  const companies = [
    {
      img:"./Images/affine.png"
    },
    {
      img:"./Images/tataiq.png"
    },
    {
      img:"./Images/cohesity.png"
    },
    {
      img:"./Images/boeing.png"
    },
    {
      img:"./Images/bun&bradstreet.png"
    },
    {
      img:"./Images/eminds.png"
    },
    {
      img:"./Images/freshworks.png"
    },
    {
      img:"./Images/geekyants.png"
    },
    {
      img:"./Images/greendeck.png"
    },
    {
      img:"./Images/informatica.png"
    },
    {
      img:"./Images/innova.png"
    },
    {
      img:"./Images/kpmg.png"
    },
    {
      img:"./Images/learnyst.png"
    },
    {
      img:"./Images/leventm.png"
    },
    {
      img:"./Images/livspace.png"
    },
    {
      img:"./Images/mindtree.png"
    },
    {
      img:"./Images/musigma.png"
    },
    {
      img:"./Images/odessa.png"
    },
    {
      img:"./Images/redbus.png"
    },
    {
      img:"./Images/robosoft.png"
    },
    {
      img:"./Images/thoughtworks.png"
    },
    {
      img:"./Images/wellnesys.png"
    },
    {
      img:"./Images/wipro.png"
    },
    {
      img:"./Images/wissen.png"
    },
    {
      img:"./Images/zensar.png"
    },
  ]

  const jobCat = [
    {
      name:"Data Science"
    },
    {
      name:"Data Analyst"
    },
    {
      name:"Data Engineer"
    },
    {
      name:"Frontend Engineer"
    },
    {
      name:"Business Analyst"
    },
    {
      name:"Block Chain Developer"
    },
    {
      name:"QA Tester"
    },
    {
      name:"Javascript Developer"
    },
    {
      name:"System Engineer"
    },
    {
      name:"Cyber Security Engineer"
    },
    {
      name:"Big data Engineer"
    },
    {
      name:"Cloud Engineer"
    },
    {
      name:"Human Resources"
    },
    {
      name:"Finance Executive"
    },
    {
      name:"Sales"
    },
    
  ]

  const jobData =[
    {
      jobTitle:'Data Analytics',
      companyName:'TATA iQ',
      location:'New Delhi',
      experience:'0-5 Years',
      JobType:'Full Time',
      package:'5-9.99998 LPA'
    },
    {
      jobTitle:'Digital Marketing Executive',
      companyName:'Agumentik Group of Companies',
      location:'Bangalore / Bengaluru',
      experience:'0-5 Years',
      JobType:'Full Time',
      package:'5-9.99998 LPA'
    },
    {
      jobTitle:'FullStack Developer',
      companyName:'Agumentik Group of Companies',
      location:'Bangalore / Bengaluru',
      experience:'0-1 Years',
      JobType:'Full Time',
      package:'5-9.99998 LPA'
    },
    {
      jobTitle:'Java Developer',
      companyName:'Effigo',
      location:'Hyderabad',
      experience:'2-5 Years',
      JobType:'Full Time',
      package:'5-9.99998 LPA'
    },
    {
      jobTitle:'Java Micro services',
      companyName:'Effigo',
      location:'Hyderabad',
      experience:'2-5 Years',
      JobType:'Full Time',
      package:'5-9.99998 LPA'
    },
    {
      jobTitle:'Java Micro Services-Lead',
      companyName:'Effigo',
      location:'Hyderabad',
      experience:'6-8 Years',
      JobType:'Full Time',
      package:'5-9.99998 LPA'
    },
   
  ]

  // staircase data

   const staircaseData =[
    {
      img:"./Images/user_default_image.png",
      text:"Create your profile",
      steps: "01"

    },
    {
      img:"./Images/user_default_image.png",
      text:"Create your profile",
      steps: "02"

    },
    {
      img:"./Images/user_default_image.png",
      text:"Create your profile",
      steps: "03"

    },
  ]

  const freqAskQus = [
    {
      qus:'I need to purchase a course. Whom should I contact ?',
      detail:'PW Skills operates a strict no-refunds policy for all purchased paid courses. Once a course purchase is confirmed, payment cannot be refunded. This policy applies to all courses, irrespective of the price, duration or the learners progress within the course.'
    },
    {
      qus:'I am not able to view my enrolled course. What to do/whom to contact ?',
      detail:'Contact our counselors through the chat support on our website. Look for the chat option on the bottom right of the Homepage. Name the course you’re interested in, and the counseling team will guide you through the admission process'
    },
    {
      qus:'What is an experience portal ? How to use it ?',
      detail:'To access your enrolled course, ensure you have logged in at learn.pwskills.com. If the course is still not visible, email your payment receipt to support@pwskills.com for assistance within 24 hours'
    },
    {
      qus:'How to get Placements and Job assistance ?',
      detail:'Our experience portal offers real-time industrial projects for students and professionals. These unpaid, remote, and self-paced internships provide valuable experience. Choose and complete as many projects as you like to receive an internship experience letter. Students as well as working professionals can do these internships'
    }
  ]
  
  const achiversData = [
    {
      img:'./Images/accenture.webp'
    },
    {
      img:'./Images/adobe.webp'
    },
    {
      img:'./Images/amazon.webp'
    },
    {
      img:'./Images/capgemini.webp'
    },
    {
      img:'./Images/deloitte.webp'
    },
    {
      img:'./Images/ey.webp'
    },
    {
      img:'./Images/fractal.webp'
    },
    {
      img:'./Images/ibm.webp'
    },
    {
      img:'./Images/infosys.webp'
    },
    {
      img:'./Images/jpmorgan.webp'
    },
    {
      img:'./Images/kpmg.webp'
    },
    {
      img:'./Images/microsoft.webp'
    },
    {
      img:'./Images/myntra.webp'
    },
    {
      img:'./Images/oyo.webp'
    },
    {
      img:'./Images/paytm.webp'
    },
    {
      img:'./Images/pwc.webp'
    },
    {
      img:'./Images/salesforce.webp'
    },
    {
      img:'./Images/samsung.webp'
    },
    {
      img:'./Images/swiggy.webp'
    },
    {
      img:'./Images/tcs.webp'
    },
    {
      img:'./Images/tvs.webp'
    },
    {
      img:'./Images/vmware.webp'
    },
    {
      img:'./Images/walmart.webp'
    },
    {
      img:'./Images/wipro.webp'
    },
    {
      img:'./Images/zomato.webp'
    },
  ]

  const achPeopleData =[
    {
      img:'./Images/AchFirst.jpeg',
      details: 'Hi All, I am a student of the NOV 2021 batch, I made a good decision by joining the Ineuron classes. A very big thank you to the entire ineuron team And special thanks to Krish Naik and Sudhanshu. It was',
      name:'SUNIL RAMESH DODDAMANI',
      companyName:'Statistician 2, Epsilon'
    },
    {
      img:'./Images/AchSecond.jpeg',
      details: 'Hello everyone I am an undergraduate from SRM University. I got placed in the Tredence Analytics it is all because of the excellent course called full stack data scientist in the ineuron. I enrolled the',
      name:'sai krishna gorantla',
      companyName:'Data Analyst, Tredence Analytics'
    },
    {
      img:'./Images/AchThird.jpeg',
      details: 'Ineuron.ai came into existence exactly when I needed it the most. It helped me transition into Data science as Senior Data Engineer at blazeclan technologies and with the help of ineuron courses',
      name:'Dharmendra kumar Yadav',
      companyName:'Data Scientist Associate, Cognizant'
    },
    {
      img:'./Images/AchFourth.jpeg',
      details: 'Ineuron.ai came into existence exactly when I needed it the most. It helped me transition into Data science as Senior Data Engineer at blazeclan technologies and with the help of ineuron courses',
      name:'SUNIL RAMESH DODDAMANI',
      companyName:'Statistician 2, Epsilon'
    },
    {
      img:'./Images/AchFifth.jpeg',
      details: 'I have studied from krish YouTube videos and ineuron, which helped me to understand the thorough concepts.',
      name:'Ayushman Misra',
      companyName:'Statistician 2, Epsilon'
    },
    {
      img:'./Images/AchSixth.jpeg',
      details: 'Before Joining iNueron FSDS Course i knew nothing about DS. thank you Sudhanshu Kumar For making it possible for a. Guy from Non Technical background to become a Data Scientist',
      name:'Somesh Chitranshi',
      companyName:'Data Scientist, NTT Data Services'
    },
    {
      img:'./Images/AchSeventh.jpeg',
      details: 'I started my career as Data Analyst i worked for 3 years as data analyst after that i met with an accident and took rest for 2 years . After 2 years i took training for data scientist from ineuron and',
      name:'Retin P Kumar',
      companyName:'AI Engineer, Accenture'
    },
    {
      img:'./Images/AchEight.jpeg',
      details: 'I was just like one of those government job aspirants (without any vision or guidance) who ended up spending years of their life behind exams like UPSC, SSC, etc, and ended up dead broke and',
      name:'SUNIL RAMESH DODDAMANI',
      companyName:'Senior Software Engineer, IBM'
    },
    {
      img:'./Images/AchNine.jpeg',
      details: 'I have studied from krish YouTube videos and ineuron, which helped me to understand the thorough concepts.',
      name:'Ayushman Misra',
      companyName:'Statistician 2, Epsilon'
    },
    {
      img:'./Images/AchTen.jpeg',
      details: 'Before Joining iNueron FSDS Course i knew nothing about DS. thank you Sudhanshu Kumar For making it possible for a. Guy from Non Technical background to become a Data Scientist',
      name:'Somesh Chitranshi',
      companyName:'Data Scientist, NTT Data Services'
    },
    {
      img:'./Images/AchEleven.jpeg',
      details: 'I started my career as Data Analyst i worked for 3 years as data analyst after that i met with an accident and took rest for 2 years . After 2 years i took training for data scientist from ineuron and',
      name:'Retin P Kumar',
      companyName:'AI Engineer, Accenture'
    },
    {
      img:'./Images/AchTwelve.jpeg',
      details: 'I was just like one of those government job aspirants (without any vision or guidance) who ended up spending years of their life behind exams like UPSC, SSC, etc, and ended up dead broke and',
      name:'SUNIL RAMESH DODDAMANI',
      companyName:'Senior Software Engineer, IBM'
    },
    {
      img:'./Images/AchFirst.jpeg',
      details: 'Hi All, I am a student of the NOV 2021 batch, I made a good decision by joining the Ineuron classes. A very big thank you to the entire ineuron team And special thanks to Krish Naik and Sudhanshu. It was',
      name:'SUNIL RAMESH DODDAMANI',
      companyName:'Statistician 2, Epsilon'
    },
    {
      img:'./Images/AchSecond.jpeg',
      details: 'Hello everyone I am an undergraduate from SRM University. I got placed in the Tredence Analytics it is all because of the excellent course called full stack data scientist in the ineuron. I enrolled the',
      name:'sai krishna gorantla',
      companyName:'Data Analyst, Tredence Analytics'
    },
    {
      img:'./Images/AchThird.jpeg',
      details: 'Ineuron.ai came into existence exactly when I needed it the most. It helped me transition into Data science as Senior Data Engineer at blazeclan technologies and with the help of ineuron courses',
      name:'Dharmendra kumar Yadav',
      companyName:'Data Scientist Associate, Cognizant'
    },
    {
      img:'./Images/AchFourth.jpeg',
      details: 'Ineuron.ai came into existence exactly when I needed it the most. It helped me transition into Data science as Senior Data Engineer at blazeclan technologies and with the help of ineuron courses',
      name:'SUNIL RAMESH DODDAMANI',
      companyName:'Statistician 2, Epsilon'
    },
    {
      img:'./Images/AchFifth.jpeg',
      details: 'I have studied from krish YouTube videos and ineuron, which helped me to understand the thorough concepts.',
      name:'Ayushman Misra',
      companyName:'Statistician 2, Epsilon'
    },
    {
      img:'./Images/AchSixth.jpeg',
      details: 'Before Joining iNueron FSDS Course i knew nothing about DS. thank you Sudhanshu Kumar For making it possible for a. Guy from Non Technical background to become a Data Scientist',
      name:'Somesh Chitranshi',
      companyName:'Data Scientist, NTT Data Services'
    },
    {
      img:'./Images/AchSeventh.jpeg',
      details: 'I started my career as Data Analyst i worked for 3 years as data analyst after that i met with an accident and took rest for 2 years . After 2 years i took training for data scientist from ineuron and',
      name:'Retin P Kumar',
      companyName:'AI Engineer, Accenture'
    },
    {
      img:'./Images/AchEight.jpeg',
      details: 'I was just like one of those government job aspirants (without any vision or guidance) who ended up spending years of their life behind exams like UPSC, SSC, etc, and ended up dead broke and',
      name:'SUNIL RAMESH DODDAMANI',
      companyName:'Senior Software Engineer, IBM'
    },
    {
      img:'./Images/AchNine.jpeg',
      details: 'I have studied from krish YouTube videos and ineuron, which helped me to understand the thorough concepts.',
      name:'Ayushman Misra',
      companyName:'Statistician 2, Epsilon'
    },
    {
      img:'./Images/AchTen.jpeg',
      details: 'Before Joining iNueron FSDS Course i knew nothing about DS. thank you Sudhanshu Kumar For making it possible for a. Guy from Non Technical background to become a Data Scientist',
      name:'Somesh Chitranshi',
      companyName:'Data Scientist, NTT Data Services'
    },
    {
      img:'./Images/AchEleven.jpeg',
      details: 'I started my career as Data Analyst i worked for 3 years as data analyst after that i met with an accident and took rest for 2 years . After 2 years i took training for data scientist from ineuron and',
      name:'Retin P Kumar',
      companyName:'AI Engineer, Accenture'
    },
    {
      img:'./Images/AchTwelve.jpeg',
      details: 'I was just like one of those government job aspirants (without any vision or guidance) who ended up spending years of their life behind exams like UPSC, SSC, etc, and ended up dead broke and',
      name:'SUNIL RAMESH DODDAMANI',
      companyName:'Senior Software Engineer, IBM'
    },
    {
      img:'./Images/AchFirst.jpeg',
      details: 'Hi All, I am a student of the NOV 2021 batch, I made a good decision by joining the Ineuron classes. A very big thank you to the entire ineuron team And special thanks to Krish Naik and Sudhanshu. It was',
      name:'SUNIL RAMESH DODDAMANI',
      companyName:'Statistician 2, Epsilon'
    },
    {
      img:'./Images/AchSecond.jpeg',
      details: 'Hello everyone I am an undergraduate from SRM University. I got placed in the Tredence Analytics it is all because of the excellent course called full stack data scientist in the ineuron. I enrolled the',
      name:'sai krishna gorantla',
      companyName:'Data Analyst, Tredence Analytics'
    },
    {
      img:'./Images/AchThird.jpeg',
      details: 'Ineuron.ai came into existence exactly when I needed it the most. It helped me transition into Data science as Senior Data Engineer at blazeclan technologies and with the help of ineuron courses',
      name:'Dharmendra kumar Yadav',
      companyName:'Data Scientist Associate, Cognizant'
    },
    {
      img:'./Images/AchFourth.jpeg',
      details: 'Ineuron.ai came into existence exactly when I needed it the most. It helped me transition into Data science as Senior Data Engineer at blazeclan technologies and with the help of ineuron courses',
      name:'SUNIL RAMESH DODDAMANI',
      companyName:'Statistician 2, Epsilon'
    },
    {
      img:'./Images/AchFifth.jpeg',
      details: 'I have studied from krish YouTube videos and ineuron, which helped me to understand the thorough concepts.',
      name:'Ayushman Misra',
      companyName:'Statistician 2, Epsilon'
    },
    {
      img:'./Images/AchSixth.jpeg',
      details: 'Before Joining iNueron FSDS Course i knew nothing about DS. thank you Sudhanshu Kumar For making it possible for a. Guy from Non Technical background to become a Data Scientist',
      name:'Somesh Chitranshi',
      companyName:'Data Scientist, NTT Data Services'
    },
    {
      img:'./Images/AchSeventh.jpeg',
      details: 'I started my career as Data Analyst i worked for 3 years as data analyst after that i met with an accident and took rest for 2 years . After 2 years i took training for data scientist from ineuron and',
      name:'Retin P Kumar',
      companyName:'AI Engineer, Accenture'
    },
    {
      img:'./Images/AchEight.jpeg',
      details: 'I was just like one of those government job aspirants (without any vision or guidance) who ended up spending years of their life behind exams like UPSC, SSC, etc, and ended up dead broke and',
      name:'SUNIL RAMESH DODDAMANI',
      companyName:'Senior Software Engineer, IBM'
    },
    {
      img:'./Images/AchNine.jpeg',
      details: 'I have studied from krish YouTube videos and ineuron, which helped me to understand the thorough concepts.',
      name:'Ayushman Misra',
      companyName:'Statistician 2, Epsilon'
    },
    {
      img:'./Images/AchTen.jpeg',
      details: 'Before Joining iNueron FSDS Course i knew nothing about DS. thank you Sudhanshu Kumar For making it possible for a. Guy from Non Technical background to become a Data Scientist',
      name:'Somesh Chitranshi',
      companyName:'Data Scientist, NTT Data Services'
    },
    {
      img:'./Images/AchEleven.jpeg',
      details: 'I started my career as Data Analyst i worked for 3 years as data analyst after that i met with an accident and took rest for 2 years . After 2 years i took training for data scientist from ineuron and',
      name:'Retin P Kumar',
      companyName:'AI Engineer, Accenture'
    },
    {
      img:'./Images/AchTwelve.jpeg',
      details: 'I was just like one of those government job aspirants (without any vision or guidance) who ended up spending years of their life behind exams like UPSC, SSC, etc, and ended up dead broke and',
      name:'SUNIL RAMESH DODDAMANI',
      companyName:'Senior Software Engineer, IBM'
    },
  ]




  const req = "Are you a recruiter?"


  const img = './Images/PWSkills-white.png'

  const [count, setCount] = useState(0)

  const login = "Login"

  const mystyle = {
    color: "white",
    backgroundColor: "#201428",
   
  };
  const btnstyle = {
    color: "white",
    backgroundColor: "#8F4CBF",
   
  };
  const btnstyles = {
    color: "white",
    backgroundColor: "red",
   
  };

  return (
    <div className='overflow-x-clip'>


    <HashRouter >
        <Routes>
              <Route path='/' element={<Cource showCaseData={showCaseData} headerData={headerData} successData = {successData} inp = "noe" img="./Images/PWSkills-logo.png" btnstyle={btnstyles} mystyle={mystyle} login="Login/Register"  coursesData={coursesData} ecosystemData = {ecosystemData} OurAchivementData={OurAchivementData} freqAskQus={freqAskQus} />
}></Route>
              <Route path='/pwskillslab' element={    <PWSkillsLab headerData={headerData} inp = "none" img={img} btnstyle={btnstyle} mystyle={mystyle} login="Login" dhinchakLabData={dhinchakLabData}/>
}></Route>
              <Route path='/jobportal' element={    <JobPortal navData={navData} staircaseData={staircaseData} req = {req} companies={companies} jobCat={jobCat} jobData={jobData}/>
}></Route>
              <Route path='/becomeanaffliate' element={    <BecomeAnAffiliate navData={navData}/>
}></Route>
              <Route path='/halloffame' element={    <HallOfFame achiversData={achiversData} achPeopleData = {achPeopleData}/>
}></Route>

  <Route path='/login' element={<Login/>}/>
        </Routes>
    </HashRouter>






   
    </div>
  )
}

export default App
