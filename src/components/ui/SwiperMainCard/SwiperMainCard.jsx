import { React , useState , useRef , useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import './SwiperMainCard.scss'
import { Pagination , Navigation ,FreeMode } from 'swiper/modules';
import { HotelCard , TripCard , AttractionCard , LoadingCard } from '../Cards/Cards';


export default ({ type, data }) => {

  return (
    <>
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        freeMode={true}
        modules={[Pagination,Navigation,FreeMode]}
        navigation={true}
        className="swiper swiperMainCard"
      >
        {(data[0] ? data : Array.from(new Array(5))).map((item,index) => (
              <SwiperSlide>
                {item ? 
                  type==="hotelsSlide" ? <HotelCard data={item} key={index}/> 
                  :type==="tripsSlide" ? <TripCard data={item} key={index}/>
                  :type==="attractionsSlide"?<AttractionCard data={item} key={index}/>
                  :null
                  
                  : <LoadingCard/>}
              </SwiperSlide>
            )
        )}

      </Swiper>
    </>
  );
}
