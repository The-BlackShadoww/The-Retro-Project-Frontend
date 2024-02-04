import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    SwiperButton,
    SwiperButtonForProductMobile,
    SwiperButtonSm,
} from "./SwiperButtons";
import "swiper/css";
// import "./assets/css/style.css";
import {
    SwiperSlides,
    SwiperSlidesLayard,
    ProductSwiperSlides,
    ProductMobileSwiperSlides,
} from "../../components/UI/cards/Card";

//!--------- Swiper 1 ---------
export function CardSwiper({ arr, slidesNumber, path }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth <= 960);

    useEffect(() => {
        const handleWidth = () => {
            setWindowWidth(window.innerWidth <= 960);
        };
        window.addEventListener("resize", handleWidth);
        return () => window.removeEventListener("resize", handleWidth);
    });

    const slides = arr.map((item) => (
        <SwiperSlide key={item.id} className="w-full">
            <SwiperSlides item={item} path={path} />
        </SwiperSlide>
    ));

    //! Swiper has style properties like = z-1, overflow-hidden
    const swiper = (
        <Swiper
            className="relative"
            spaceBetween={0}
            slidesPerView={`${windowWidth ? 1.3 : 3}`}
        >
            {slidesNumber <= 3 ? null : <SwiperButtonSm />}
            {slides}
        </Swiper>
    );

    return <div>{swiper}</div>;
}

//!--------- Swiper 2 ---------
export function CardSwiperLg({ arr, slidesNumber, path }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth <= 960);

    useEffect(() => {
        const handleWidth = () => {
            setWindowWidth(window.innerWidth <= 960);
        };
        window.addEventListener("resize", handleWidth);
        return () => window.removeEventListener("resize", handleWidth);
    });

    const slides = arr.map((item) => (
        <SwiperSlide key={item.id} className="w-full">
            <SwiperSlidesLayard item={item} path={path} />
        </SwiperSlide>
    ));

    const swiper = (
        <div className="relative">
            <Swiper spaceBetween={0} slidesPerView={`${windowWidth ? 1.2 : 3}`}>
                {slides}
                <SwiperButton />
            </Swiper>
        </div>
    );

    return <div>{swiper}</div>;
}

//! Product swiper
export function ProductCardSwiper({ arr, slidesNumber, path }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth <= 960);

    useEffect(() => {
        const handleWidth = () => {
            setWindowWidth(window.innerWidth <= 960);
        };
        window.addEventListener("resize", handleWidth);
        return () => window.removeEventListener("resize", handleWidth);
    });

    const slides = arr.map((item) => (
        <SwiperSlide
            key={item.id}
            className="w-full"
            // onClick={() => window.location.reload()}
        >
            <ProductSwiperSlides
                item={item}
                path={`/singleProduct/${item.id}`}
            />
        </SwiperSlide>
    ));

    const swiper = (
        <div className="relative">
            <Swiper spaceBetween={0} slidesPerView={`${windowWidth ? 1.2 : 3}`}>
                {slides}
                <SwiperButton />
            </Swiper>
        </div>
    );

    return <div>{swiper}</div>;
}

//! Mobile product swiper
export function ProductMobileCardSwiper({ arr, slidesNumber }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth <= 960);

    useEffect(() => {
        const handleWidth = () => {
            setWindowWidth(window.innerWidth <= 960);
        };
        window.addEventListener("resize", handleWidth);
        return () => window.removeEventListener("resize", handleWidth);
    });

    const slides = arr.map((item) =>
        item.images.map((img, index) => (
            <SwiperSlide key={index} className="w-full h-full">
                <ProductMobileSwiperSlides item={img} img={img} />
            </SwiperSlide>
        ))
    );

    const swiper = (
        <Swiper
            className="relative"
            spaceBetween={0}
            slidesPerView={`${windowWidth ? 1 : 1}`}
        >
            <SwiperButtonForProductMobile />
            {slides}
        </Swiper>
    );

    return <div>{swiper}</div>;
}
