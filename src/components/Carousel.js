import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

function Carousel() {
  return (
    <div className="carousel-container">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            backgroundImage: `url(https://theideaboutique.com/wp-content/uploads/2016/07/the-idea-boutique-resort-collection-slider-4.jpg)`,
            height: "400px",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(https://online.visual-paradigm.com/repository/images/cf8b7f81-8231-4f41-8e06-c74429bdd93f/facebook-ads-design/hotel-staycation-promotion-facebook-ad.png)`,
            height: "400px",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(https://online.visual-paradigm.com/repository/images/854c3ff9-3c26-4864-bf87-9dd19da71288/facebook-ads-design/hotel-and-resort-staycation-promotion-facebook-ad.png)`,
            height: "400px",
          }}
        ></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
