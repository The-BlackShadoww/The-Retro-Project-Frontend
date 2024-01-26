import React from "react";
import { ProductImg } from "../UI/Media/AdvancedImg";

const OrderSummary = ({ data }) => {
    let content;

    content = data.map((i) => (
        <div key={i.id}>
            <div className="w-full flex gap-5">
                <div className="mobile_sm:w-52 mobile_sm:h-44 w-28 h-20">
                    <ProductImg img={"/Retro/new_img_main_guigju"} />
                </div>{" "}
                <div className="w-full flex flex-col">
                    <span className="tablet:text-2xl text-lg font-bold">
                        {i.name}
                    </span>
                    <span className="tablet:pt-1 text-[#757575] tablet:font-semibold">
                        {i.category}
                    </span>
                    <span className="tablet:pt-1 text-[#757575] tablet:font-semibold">
                        Quantity<span className="pl-2">{i.quantity}</span>
                    </span>
                    <div className="flex justify-between tablet:pt-12 pt-5 text-lg font-semibold">
                        <span>Total</span>
                        <span>
                            $<span>{i.price}</span>
                        </span>
                    </div>
                </div>
            </div>
            <hr className="my-8" />
        </div>
    ));

    return (
        <>
            <div className="w-full bg-[#111111] px-4 py-4">
                <h1 className="text-white text-2xl font-bold">Order Summary</h1>
            </div>
            <div className="w-full px-4 py-8 border">{content}</div>
        </>
    );
};

export default OrderSummary;
