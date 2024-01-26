import React from "react";
import { ProductImg } from "../UI/Media/AdvancedImg";
import { HeartIcon, BinIcon } from "../../assests/icons/Icons";

const BagItems = ({ data }) => {
    let content;
    if (data.length === 0) {
        content = (
            <p className="font-medium text-base">
                There are no items in your bag
            </p>
        );
    } else {
        content = data.map((i) => (
            <div key={i.id} className="flex py-6 border-b">
                <div className="mobile_sm:w-52 mobile_sm:h-44 w-28 h-20">
                    <ProductImg img={"/Retro/new_img_main_guigju"} />
                </div>
                <div className="pl-6 w-full">
                    <div className="flex justify-between w-full font-medium text-base">
                        <p>Product Name</p>
                        <p>$00</p>
                    </div>
                    <p className="font-medium text-base opacity-60 pt-[2px]">
                        Gender's product
                    </p>
                    <p className="font-medium text-base pt-[2px] opacity-60">
                        color
                    </p>
                    <div className="flex flex-row">
                        <div className="flex">
                            <p className="font-medium text-base opacity-60 pr-4">
                                Size
                            </p>
                            <select className="font-medium text-base opacity-60 px-2">
                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>
                            </select>
                        </div>
                        <div className="flex ml-4">
                            <p className="font-medium text-base opacity-60 pr-4">
                                Quantity
                            </p>
                            <select className="font-medium text-base opacity-60 px-2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-10 flex">
                        <button className=" ">
                            <HeartIcon />
                        </button>
                        <button className="pl-4">
                            <BinIcon />
                        </button>
                    </div>
                </div>
            </div>
        ));
    }
    
    return (
        <div className="tablet:basis-[66.6667%] tablet:max-w-[66.6667%] w-full px-2 ">
            <h1 className="text-3xl font-medium ">Bag</h1>
            <div>{content}</div>
        </div>
    );
};

export default BagItems;
