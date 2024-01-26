import React from "react";
import { ProductMobileCardSwiper } from "../../../lib/Swiper/Swiper";

const MobileProductSwiper = ({ data }) => {
    return (
        <div className="tablet:hidden block">
            <ProductMobileCardSwiper arr={data} />
        </div>
    );
};

export default MobileProductSwiper;
