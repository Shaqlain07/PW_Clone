import React from "react";
import {Typewriter,Cursor, useTypewriter} from 'react-simple-typewriter'

const Hero = () => {
  const [text] = useTypewriter({
    words:['PRACTICAL','AFFORDABLE','EASY'],
    loop:{},
    typeSpeed:200,
    deleteSpeed:170,
    
  })
  return (
    <div className="px-[4vw] relative  sm:mt-4 min-h-[72vh] flex flex-col-reverse  justify-between items-center gap-[30vh]  w-screen sm:flex-row">
      <div className="w-[60vw]  flex flex-col gap-5">
        <h2 className="sm:text-4xl text-3xl w-[85%] sm:w-fit text-center sm:text-left font-semibold mt-8">Upscaling Made  <span className="text-[#E97862]">
          <span>&lt;</span>{text}<Cursor/>&gt;</span> </h2>
        <p className="text-lg text-gray-600 sm:w-[85%]  ">
        PW Skills is the one-stop destination for your upskilling journey. Brace yourself to find the best job-ready courses and high-end technologies available in the sector. And if that weren't good enough, get the highest quality course content at the most affordable prices!
What are we waiting for ? Let's push Start!
        </p>
        <button className="bg-[#D2614B] py-3 text-white rounded-xl sm:w-[200px] hover:bg-[#c53418]">Explore Course</button>
      </div>
      <div className="sm:w-[40vw] w-[70vw] mt-[30vh] sm:mt-10 min-h-fit flex items-center justify-center relative">
        <img className="absolute " src="./Images/hero-shadow.png" alt="img" />
        <img className="absolute"  src="./Images/hero-bg.png" alt="img" />
      </div>
    </div>
  );
};

export default Hero;
