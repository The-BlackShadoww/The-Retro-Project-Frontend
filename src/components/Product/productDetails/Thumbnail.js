import React from "react";
import { ProductImg } from "../../UI/Media/AdvancedImg";
import "./productDetails.css";

const Thumbnail = ({ data, handleMouseOver, radioRef, currentThumb }) => {
    return (
        <div className="tablet:flex flex-row hidden xl:w-[calc(100%-456px)] tablet:h-[669px] h-auto xl:pl-[80px] tablet_lg:pl-[60px] lg:pl-[40px] tablet:pl-[16px] mt-[48px] overflow-hidden">
            {/* 1st small images */}
            <div className=" w-[60px] h-full xl:pl-[48px] tablet:pr-[4px]  tablet:flex flex-col hidden gap-[8px] flex-grow-[1] inset-0 scroll-container ">
                {/* 1 */}
                <div
                    onMouseOver={() =>
                        handleMouseOver("/Retro/new_img_main_guigju")
                    }
                    className="w-[60px] h-[60px] relative flex "
                >
                    <input
                        type="radio"
                        id="image_1_id"
                        name="smallImg"
                        ref={radioRef}
                        className="appearance-none"
                    />
                    <label for="image_1_id" role="button">
                        <ProductImg img="/Retro/new_img_main_guigju" />
                    </label>
                </div>
                {/* 2 */}
                <div
                    onMouseOver={() =>
                        handleMouseOver("/Retro/new_img_4_viquzm")
                    }
                    className="w-[60px] h-[60px] relative flex "
                >
                    <input
                        type="radio"
                        id="image_2_id"
                        name="smallImg"
                        ref={radioRef}
                        className="appearance-none"
                    />
                    <label for="image_2_id" role="button">
                        <ProductImg img="/Retro/new_img_4_viquzm" />
                    </label>
                </div>

                {/* *************************************************** */}
                <div
                    onMouseOver={() =>
                        handleMouseOver("/Retro/new_img_4_viquzm")
                    }
                    className="w-[60px] h-[60px] relative flex "
                >
                    <input
                        type="radio"
                        id="image_2_id"
                        name="smallImg"
                        ref={radioRef}
                        className="appearance-none"
                    />
                    <label for="image_2_id" role="button">
                        <ProductImg img="/Retro/new_img_4_viquzm" />
                    </label>
                </div>
                <div
                    onMouseOver={() =>
                        handleMouseOver("/Retro/new_img_4_viquzm")
                    }
                    className="w-[60px] h-[60px] relative flex "
                >
                    <input
                        type="radio"
                        id="image_2_id"
                        name="smallImg"
                        ref={radioRef}
                        className="appearance-none"
                    />
                    <label for="image_2_id" role="button">
                        <ProductImg img="/Retro/new_img_4_viquzm" />
                    </label>
                </div>
                <div
                    onMouseOver={() =>
                        handleMouseOver("/Retro/new_img_4_viquzm")
                    }
                    className="w-[60px] h-[60px] relative flex "
                >
                    <input
                        type="radio"
                        id="image_2_id"
                        name="smallImg"
                        ref={radioRef}
                        className="appearance-none"
                    />
                    <label for="image_2_id" role="button">
                        <ProductImg img="/Retro/new_img_4_viquzm" />
                    </label>
                </div>
                <div
                    onMouseOver={() =>
                        handleMouseOver("/Retro/new_img_4_viquzm")
                    }
                    className="w-[60px] h-[60px] relative flex "
                >
                    <input
                        type="radio"
                        id="image_2_id"
                        name="smallImg"
                        ref={radioRef}
                        className="appearance-none"
                    />
                    <label for="image_2_id" role="button">
                        <ProductImg img="/Retro/new_img_4_viquzm" />
                    </label>
                </div>
                <div
                    onMouseOver={() =>
                        handleMouseOver("/Retro/new_img_4_viquzm")
                    }
                    className="w-[60px] h-[60px] relative flex "
                >
                    <input
                        type="radio"
                        id="image_2_id"
                        name="smallImg"
                        ref={radioRef}
                        className="appearance-none"
                    />
                    <label for="image_2_id" role="button">
                        <ProductImg img="/Retro/new_img_4_viquzm" />
                    </label>
                </div>
                <div
                    onMouseOver={() =>
                        handleMouseOver("/Retro/new_img_4_viquzm")
                    }
                    className="w-[60px] h-[60px] relative flex "
                >
                    <input
                        type="radio"
                        id="image_2_id"
                        name="smallImg"
                        ref={radioRef}
                        className="appearance-none"
                    />
                    <label for="image_2_id" role="button">
                        <ProductImg img="/Retro/new_img_4_viquzm" />
                    </label>
                </div>
                <div
                    onMouseOver={() =>
                        handleMouseOver("/Retro/new_img_4_viquzm")
                    }
                    className="w-[60px] h-[60px] relative flex "
                >
                    <input
                        type="radio"
                        id="image_2_id"
                        name="smallImg"
                        ref={radioRef}
                        className="appearance-none"
                    />
                    <label for="image_2_id" role="button">
                        <ProductImg img="/Retro/new_img_4_viquzm" />
                    </label>
                </div>
                <div
                    onMouseOver={() =>
                        handleMouseOver("/Retro/new_img_4_viquzm")
                    }
                    className="w-[60px] h-[60px] relative flex "
                >
                    <input
                        type="radio"
                        id="image_2_id"
                        name="smallImg"
                        ref={radioRef}
                        className="appearance-none"
                    />
                    <label for="image_2_id" role="button">
                        <ProductImg img="/Retro/new_img_4_viquzm" />
                    </label>
                </div>
                <div
                    onMouseOver={() =>
                        handleMouseOver("/Retro/new_img_4_viquzm")
                    }
                    className="w-[60px] h-[60px] relative flex "
                >
                    <input
                        type="radio"
                        id="image_2_id"
                        name="smallImg"
                        ref={radioRef}
                        className="appearance-none"
                    />
                    <label for="image_2_id" role="button">
                        <ProductImg img="/Retro/new_img_4_viquzm" />
                    </label>
                </div>
            </div>

            {/* --------- Thumb Screen ---------- */}
            <div className="tablet:w-[535px] w-full h-[669px] overflow-hidden">
                <ProductImg img={currentThumb} />
            </div>
        </div>
    );
};

export default Thumbnail;
