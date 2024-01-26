import React from "react";
import { useSwiper } from "swiper/react";
import { CaretRightIcon, CaretLeftIcon } from "../../assests/icons/Icons";

//! ---------- SwiperButton -------------
export const SwiperButton = ({ item }) => {
    const swiper = useSwiper();

    return (
        <div className="w-full hidden md:flex justify-end mt-3">
            <button
                className="bg-gray-200 p-5 rounded-full mx-1 hover:bg-gray-300"
                onClick={() => swiper.slidePrev()}
            >
                <CaretLeftIcon />
            </button>
            <button
                className="bg-gray-200 p-5 rounded-full mx-1 hover:bg-gray-300"
                onClick={() => swiper.slideNext()}
            >
                <CaretRightIcon />
            </button>
        </div>
    );
};

//! ---------- SwiperButtonSm -------------
export const SwiperButtonSm = ({ item }) => {
    const swiper = useSwiper();

    return (
        <div className="w-full tablet:block hidden">
            <button
                className="bg-gray-200 z-10 p-3 rounded-full mx-1 hover:bg-gray-300 absolute top-2/4 left-[5%] -translate-y-1/2"
                onClick={() => swiper.slidePrev()}
            >
                <CaretLeftIcon />
            </button>
            <button
                className="bg-gray-200 z-10 p-3 rounded-full mx-1 hover:bg-gray-300 absolute top-2/4 right-[5%] -translate-y-1/2"
                onClick={() => swiper.slideNext()}
            >
                <CaretRightIcon />
            </button>
        </div>
    );
};

export const SwiperButtonForProductMobile = ({ item }) => {
    const swiper = useSwiper();

    return (
        <div className="w-full block">
            <button
                className="bg-gray-100 z-10 p-2 rounded-full mx-1 hover:bg-gray-300 absolute top-2/4 left-[5%] -translate-y-1/2"
                onClick={() => swiper.slidePrev()}
            >
                <CaretLeftIcon />
            </button>
            <button
                className="bg-gray-100 z-10 p-2 rounded-full mx-1 hover:bg-gray-300 absolute top-2/4 right-[5%] -translate-y-1/2"
                onClick={() => swiper.slideNext()}
            >
                <CaretRightIcon />
            </button>
        </div>
    );
};
