import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './SwiperPic.scss';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function SwiperPic({ data }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="SwiperPic mySwiper2"
      >
        {data.map((item,index)=>(
          <SwiperSlide key={index}>
            <img src={item.path}/>
          </SwiperSlide>
        ))}
  
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="SwiperPic mySwiper"
      >
        {data.map((item,index)=>(
          <SwiperSlide key={index}>
            <img src={item.path}/>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </>
  );
}
