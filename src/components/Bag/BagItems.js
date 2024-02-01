import React from "react";
import { ProductImg } from "../UI/Media/AdvancedImg";
import { HeartIcon, BinIcon, HeartIconFill } from "../../assests/icons/Icons";

const BagItems = ({ data, handleQuantity, onDelete, onFavorite }) => {
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
                    <ProductImg img={i.main_img} />
                </div>
                <div className="pl-6 w-full">
                    <div className="flex justify-between w-full font-medium text-base">
                        <p>{i.name}</p>
                        <p>${i.price * i.quantity}</p>
                    </div>
                    <p className="font-medium text-base opacity-60 pt-[2px]">
                        {i.gender} / {i.category}
                    </p>
                    <p className="font-medium text-base pt-[2px] opacity-60">
                        color
                    </p>
                    <div className="flex flex-row">
                        <div className="flex">
                            <p className="font-medium text-base opacity-60 pr-4">
                                Size
                            </p>
                            <span className="font-medium text-base opacity-60 px-2">
                                {i.size}
                            </span>
                            {/* <select className="font-medium text-base opacity-60 px-2">
                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>
                            </select> */}
                        </div>
                        <div className="flex ml-4">
                            <p className="font-medium text-base opacity-60 pr-4">
                                Quantity
                            </p>
                            <select
                                className="font-medium text-base opacity-60 px-2"
                                onChange={(e) => handleQuantity(e, i)}
                            >
                                <option value={i.quantity} className="hidden">
                                    {i.quantity}
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-10 flex">
                        <button onClick={() => onFavorite(i)} className="">
                            {i.favorite ? <HeartIconFill /> : <HeartIcon />}
                        </button>
                        <button onClick={() => onDelete(i.id)} className="pl-4">
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
