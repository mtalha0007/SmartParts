import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Images from '../../assets/images/Images';

function SwiperSlider() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Images.verticalBanner1}/></SwiperSlide>
        <SwiperSlide><img src={Images.verticalBanner2}/></SwiperSlide>
 
      </Swiper>
    </>
  );
}
export default  SwiperSlider