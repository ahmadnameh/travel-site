import { React, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import "./SwiperHotelPic.scss"


const SwiperHotelPic = ({ imagesPath }) => {
  return (
    <>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="swiperHotelPic"
      initialSlide={1}
    >
      {imagesPath.map((item,index)=>(
        <SwiperSlide key={index}>
          <img src={item.path} alt="hotelPic" />
        </SwiperSlide>
      ))}
    </Swiper>
  </>
  )
}

export default SwiperHotelPic


