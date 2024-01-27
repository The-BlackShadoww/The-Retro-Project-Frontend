import React from "react";
import { ProductMobileCardSwiper } from "../../../lib/Swiper/Swiper";

const MobileProductSwiper = ({ data }) => {
    const images = data.map((p) => p.images);

    console.log(images);
    
    return (
        <div className="tablet:hidden block">
            <ProductMobileCardSwiper arr={data} />
        </div>
    );
};

export default MobileProductSwiper;
