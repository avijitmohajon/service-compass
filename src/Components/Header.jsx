import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Example image imports (replace with your own)
import slide1 from "../assets/home.jpg";
import slide2 from "../assets/247 support.jpg";
import slide3 from "../assets/repair.jpg";

const Header = () => {
  return (
    <div className="max-h-[60vh] overflow-hidden bg-[#D9EAFD] ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="h-[60vh]"
      >
        <SwiperSlide className="flex items-center justify-center">
          <img
            src={slide1}
            alt="Slide 1"
            className="h-full w-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center">
          <img
            src={slide2}
            alt="Slide 2"
            className="h-full w-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center">
          <img
            src={slide3}
            alt="Slide 3"
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
