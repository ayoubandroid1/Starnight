import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import stadium from "../assets/stadium.jpg"
import stadium1 from "../assets/stadium1.jpeg"
import stadium2 from "../assets/stadium 3.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
export default function CarouselTransition() {
  return (
        <>
          <Swiper
            pagination={{
              type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
               <img src={stadium}></img>
               <p>CASABLANCA STADIUM</p>
               </SwiperSlide>
            <SwiperSlide> 
              <img src={stadium1}></img>
              <p>RABAT STADIUM</p>
              </SwiperSlide>
            <SwiperSlide> 
              <img src={stadium2}></img>
              <p>TANGIER STADIUM</p>
              </SwiperSlide>
          </Swiper>
        </>
      );
    }