import React from "react";
import { CardSwiper } from "../../lib/Swiper/Swiper";
import Section from "../../layouts/Section";

const Trending = ({ data }) => {
    let content;

    content = (
        <Section title={"Trending"}>
            <div className="">
                <CardSwiper arr={data} path={"product"} />
            </div>
        </Section>
    );

    return content;
};

export default Trending;
