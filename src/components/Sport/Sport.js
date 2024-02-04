import React from "react";
import { CardSwiper } from "../../lib/Swiper/Swiper";
import Section from "../../layouts/Section";

const Sport = ({ data }) => {
    let content;

    content = (
        <Section title={"Shop by Sport"}>
            <div>
                <CardSwiper arr={data} path={"/product"} />
            </div>
        </Section>
    );

    return content;
};

export default Sport;
