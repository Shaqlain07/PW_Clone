
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import SuccessCard from './SuccessCard'

const Succses = ({successData}) => {
  return (
    <div className='flex flex-col items-center justify-center '>
        <h3 className='text-3xl font-semibold text-center'>Success Stories</h3>


   


        <Swiper
      slidesPerView={3}
      spaceBetween={10}
      loop={true}

     
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        300:{
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      modules={[ Autoplay]}
      className="mySwiper w-[90vw] mx-auto"
    >
       
        {successData.map((elem,idx)=>
                 <SwiperSlide key={idx} >
                
             <SuccessCard successData = {successData}/>
            
                    
                 </SwiperSlide>
                 )}
               

            
       
     
     

    </Swiper>


    </div>
  )
}

export default Succses