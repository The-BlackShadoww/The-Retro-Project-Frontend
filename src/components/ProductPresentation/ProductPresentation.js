import React from "react";
import "../../assests/styles/global.css";
import HeroContent from "../Hero/HeroContent";
import CategoryNav from "./CategoryNav";
import Essentials from "./Essentials";
import Section from "../../layouts/Section";
import Membership from "./Membership";
import Community from "../Community/Community";
import JustIn from "./JustIn";

const ProductPresentation = ({ data, color }) => {
    let content = data.map((i) => (
        <section key={i.id} className="p-4 md:p-12 Poppins">
            {/* Nav */}
            <CategoryNav i={i} />
            {/* Banner */}
            <HeroContent data={data} path={`/product/${i.gender}`} />
            {/* Essentials */}
            <Section title="Shop the Essentials">
                <Essentials data={i.essentials} />
            </Section>
            {/* Just In */}
            <Section title={"Just IN"}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <JustIn data={i.justIn} color={color} />
                </div>
            </Section>
            {/* Membership */}
            <Membership data={i.nike_membership} />
            {/* Membership Benefits */}
            <Community />
        </section>
    ));

    return content;
};

export default ProductPresentation;
