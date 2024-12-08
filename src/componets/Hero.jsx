import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import './Hero.css';
import CardDeal from './CardDeal';
import { productName } from '/src/utils/products.js';
import CardShop from './CardShop';

const Hero = () => {
  return (
    <div className=" my-3"> 
      <Swiper 
        navigation={true} 
        autoplay={{ delay: 3000 }} 
        modules={[Navigation, Autoplay]} 
        className="mySwiper h-full " 
      >
        <SwiperSlide>
          <img className="w-full h-[400px] object-cover" src="/image/Hero-r3.jpg" alt="Hero 4 description" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[400px]  object-cover" src="/image/Hero-r.jpg" alt="Hero 1 description" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[400px] object-cover" src="/image/Hero-r3.jpg" alt="Hero 2 description" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[400px] object-cover" src="/image/Hero-r2.jpg" alt="Hero 3 description" />
        </SwiperSlide>
        
      </Swiper>
      <CardDeal/>
      <CardShop products={productName}/>
    </div>
  );
}

export default Hero;
