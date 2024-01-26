import React from "react";
import Section from "../../../layouts/Section";
import { ProductCardSwiper } from "../../../lib/Swiper/Swiper";

const YouMightAlsoLike = ({ data }) => {
    return (
        <div className="tablet:px-12 px-4 pb-20">
            <Section title_lg={"You Might Also Like"}>
                <div>
                    <ProductCardSwiper arr={data} />
                </div>
            </Section>
        </div>
    );
};

export default YouMightAlsoLike;
