import React from "react";
import Section from "../../layouts/Section";
import { WindowWidth } from "../../utils/windowWidth/WindowWidth";
import { Link } from "react-router-dom";
import { DescriptiveText } from "../UI/Texts/Text";
import { Button } from "../UI/Buttons/Button";
import "../../assests/styles/global.css";

const Membership = ({ data }) => {
    return (
        <Section title={"Membership"}>
            <Link to="/member/profile">
                <div>
                    <div className="relative overflow-hidden w-full">
                        <div className="absolute left-[2%] top-[50%] -translate-y-[50%] hidden md:block">
                            <h1 className="akira 2xl:text-[2.3vw] xl:text-[3.2vw] lg:text-[3vw] tablet:text-[2.8vw]  md:text-[2.8vw]">
                                {data.heading}
                            </h1>
                            <p className="Poppins text-lg font-medium my-2 xl:my-5 tablet:text-sm md:text-[10px]">
                                {data.message}
                            </p>
                            <div className="">
                                <Button path={"/member/profile"}>
                                    Continue
                                </Button>
                            </div>
                        </div>
                        {/* image */}
                        <WindowWidth
                            screen={600}
                            src_lg={data.img_lg}
                            srt_sm={data.img_sm}
                        />
                    </div>

                    <div className="mt-12 md:hidden">
                        <h1 className="akira text-4xl font-bold mb-6">
                            {data.heading}
                        </h1>
                        <DescriptiveText>{data.message}</DescriptiveText>
                        <div className="mt-10">
                            <Button path={"/member/profile"}>Continue</Button>
                        </div>
                    </div>
                </div>
            </Link>
        </Section>
    );
};

export default Membership;
