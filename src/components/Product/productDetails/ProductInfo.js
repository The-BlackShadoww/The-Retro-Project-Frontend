import React from "react";
import { HeartIcon } from "../../../assests/icons/Icons";
import { LargeButtonBlack, LargeButtonWhite } from "../../UI/Buttons/Button";

const ProductInfo = ({ formControl, handelModal }) => {
    return (
        <div className="tablet:w-[456px] w-full h-full">
            <div className="pl-[24px] pr-[48px] mt-[48px] py-1">
                <div>
                    <h4 className="text-2xl font-medium">Product Name</h4>
                    <p className="font-medium">category name</p>
                    <p className="py-4 font-medium">$00</p>
                </div>
                <div className="">
                    <form onSubmit={formControl}>
                        <div>
                            <fieldset>
                                <legend
                                    aria-label="select size"
                                    className="font-medium"
                                >
                                    <span>Select Sizes</span>
                                </legend>
                                <div className={`grid grid-cols-3 gap-2 pt-2`}>
                                    <div className="relative">
                                        <input
                                            type="radio"
                                            id="#large"
                                            name="size"
                                            value="large"
                                            className="appearance-none absolute peer shrink-0 h-[1px] w-[1px] overflow-hidden whitespace-nowrap"
                                        />
                                        <label
                                            for="#large"
                                            className="h-[48px] flex justify-center items-center text-base font-medium cursor-pointer outline-none rounded-[4px] border border-gray-200  peer-checked:border peer-checked:border-black bg-white"
                                            tabIndex="-1"
                                        >
                                            Large
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="radio"
                                            id="#medium"
                                            name="size"
                                            value="medium"
                                            className="appearance-none absolute peer shrink-0 h-[1px] w-[1px] overflow-hidden whitespace-nowrap"
                                        />
                                        <label
                                            for="#medium"
                                            className="h-[48px] flex justify-center items-center text-base font-medium cursor-pointer outline-none rounded-[4px] border border-gray-200 peer-checked:border peer-checked:border-black bg-white"
                                            tabIndex="-1"
                                        >
                                            Medium
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="radio"
                                            id="#small"
                                            name="size"
                                            value="small"
                                            className="appearance-none absolute peer shrink-0 h-[1px] w-[1px] overflow-hidden whitespace-nowrap"
                                        />
                                        <label
                                            for="#small"
                                            className="h-[48px] flex justify-center items-center text-base font-medium cursor-pointer outline-none rounded-[4px] border border-gray-200 peer-checked:border peer-checked:border-black bg-white"
                                            tabIndex="-1"
                                        >
                                            Small
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="pt-12">
                            <LargeButtonBlack path="">
                                Add to Bag
                            </LargeButtonBlack>
                            <LargeButtonWhite>
                                <span className="flex">
                                    <span className="pr-3">Favorite</span>
                                    <HeartIcon />
                                </span>
                            </LargeButtonWhite>
                            <div className="pt-8">
                                <p className="font-semibold">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Obcaecati aut, eius
                                    suscipit, sint labore, beatae assumenda iste
                                    dolor aliquam accusantium ratione laudantium
                                    odit! Assumenda ipsam dolorem quibusdam
                                    quidem ullam aperiam sint aliquid quaerat,
                                    suscipit ea labore ipsum ratione! At porro
                                    id amet architecto repudiandae itaque totam
                                    quae ut saepe hic!
                                </p>
                                <button
                                    onClick={handelModal}
                                    className="pt-4 text-base font-medium border-b border-black"
                                >
                                    View product details
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
