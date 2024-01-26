import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperButtons from "./SwiperButtons";
import "swiper/css";
import { SwiperSlidesLayard } from "../../components/UI/cards/Card";

const Swiper2 = ({ arr }) => {
    const slides = arr.map((item) => (
        <SwiperSlide className="w-full">
            <SwiperSlidesLayard item={item} />
        </SwiperSlide>
    ));

    const windowWidth = false;

    const swiper = (
        <Swiper spaceBetween={0} slidesPerView={`${windowWidth ? 1.2 : 3}`}>
            <SwiperButtons />
            {slides}
        </Swiper>
    );

    return (
        <div>
            <h1>Swiper 3</h1>
            {swiper}
        </div>
    );
};

export default Swiper2;
