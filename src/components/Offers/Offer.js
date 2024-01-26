import React from "react";
import { Link } from "react-router-dom";
import { DescriptiveText } from "../UI/Texts/Text";
import { Button } from "../UI/Buttons/Button";
import "../../assests/styles/global.css";
import { WindowWidth } from "../../utils/windowWidth/WindowWidth";
import Section from "../../layouts/Section";

const Offer = () => {
    const src_lg = "/Retro/offer-2_t0xeb8";
    const src_sm = "/Retro/offer-3_fkduya";

    return (
        <Section title={"Happening Now"}>
            <Link to="/product">
                <div className="Poppins">
                    <div className="relative overflow-hidden w-full">
                        <div className=" absolute  2xl:left-8 2xl:top-[4rem]   xl:top-[3rem] xl:left-7   lg:top-12 lg:left-5   tablet:top-11 tablet:left-4   md:top-9 md:left-4  hidden md:block">
                            <h1 className="2xl:text-[3.5vw] xl:text-[3.2vw] lg:text-[3vw] tablet:text-[2.8vw]  md:text-[2.8vw] akira">
                                Save up to 50%
                            </h1>
                            <p className="roboto my-2 xl:my-5 tablet:text-[16px] md:text-[10px] font-semibold">
                                Describe the offers here
                            </p>
                            <div className="">
                                <Button path="/product">Shop Now</Button>
                            </div>
                        </div>
                        {/* image */}
                        <WindowWidth
                            screen={767}
                            src_lg={src_lg}
                            srt_sm={src_sm}
                        />
                    </div>

                    <div className="mt-12 md:hidden">
                        <DescriptiveText>
                            Order now to get your gifts in time for the
                            holidays. Shop new markdowns- no code needed. sale
                            ends 31.12.
                        </DescriptiveText>
                        <div className="mt-10">
                            <Button path="/product">Shop Now</Button>
                        </div>
                    </div>
                </div>
            </Link>
        </Section>
    );
};

export default Offer;
