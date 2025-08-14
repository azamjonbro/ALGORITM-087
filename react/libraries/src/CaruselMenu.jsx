// CarouselMenu.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import img1 from "./assets/react.svg";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CarouselMenu = () => {
  return (
    <div className="corusel w-full max-w-xl mx-auto">
      <Swiper
        // modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={3} // Nechta slide ko‘rinadi
        navigation
        pagination={{ clickable: true }}
        loop={true} // Carousel aylanadigan bo‘lishi uchun
        autoplay={{ delay: 3000 }} // Har bir slide 3 soniya davomida ko‘rinadi
        // responsive breakpoints
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        // accessibility uchun
        a11y={{ enabled: true }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="p-4 bg-blue-500 text-white rounded-lg text-center">
            Menu 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 bg-blue-500 text-white rounded-lg text-center">
            <img src={img1} alt="" />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="p-4 bg-green-500 text-white rounded-lg text-center">
            Menu 2
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="p-4 bg-red-500 text-white rounded-lg text-center">
            Menu 3
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="p-4 bg-purple-500 text-white rounded-lg text-center">
            Menu 4
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default CarouselMenu;