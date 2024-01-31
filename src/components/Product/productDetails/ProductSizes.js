import React from "react";

const ProductSizes = ({ size, handleSize }) => {
    return (
        <div>
            <fieldset>
                <legend aria-label="select size" className="font-medium">
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
                            onChange={handleSize}
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
                            onChange={handleSize}
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
                            onChange={handleSize}
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
    );
};

export default ProductSizes;
