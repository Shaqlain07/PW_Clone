
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
const OurAchivement = ({OurAchivementData}) => {
  return (
    <div className='flex items-center justify-center flex-col'>
        <h2 className='text-3xl  my-5 font-semibold text-center'>Our Achievers Work With</h2>
        
        <Swiper
      slidesPerView={3}
      spaceBetween={10}
      loop={true}

     
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[ Autoplay]}
      className="mySwiper w-[80vw] mx-10"
    >
       
        {OurAchivementData.map((elem, idx)=>(
             <div key={idx} className="mt-40 bg-blue-800">
                 <SwiperSlide className=' py-20 ' key={idx}>


                <img src={elem.img} alt="img" />
                    
                 </SwiperSlide>

                 </div>
        ))}
       
     
     

    </Swiper>

        
    </div>
  )
}

export default OurAchivement