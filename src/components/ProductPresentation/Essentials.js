import React from "react";
import { CardSwiper } from "../../lib/Swiper/Swiper";

const Essentials = ({ data }) => {
    let content = (
        <>
            <CardSwiper arr={data} slidesNumber={3} path={"/product"} />
        </>
    );
    return content;
};

export default Essentials;
