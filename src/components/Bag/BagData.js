import React from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

const BagData = ({ promoCode, getCode, handelCode, isCodeOpen }) => {
    return (
        <div>
            <div className="pb-5">
                <div
                    onClick={handelCode}
                    className="w-full flex justify-between items-center cursor-pointer"
                >
                    <p className="font-medium">Do you have a promo code?</p>
                    {isCodeOpen ? <RxCaretUp /> : <RxCaretDown />}
                </div>
                <div className={`${isCodeOpen ? "block" : "hidden"}`}>
                    <input
                        type="text"
                        value={promoCode}
                        id=""
                        name=""
                        onChange={getCode}
                        className="flex-grow-[1] px-4 py-2 rounded-lg outline-none border border-[#dddddd]"
                    />
                    <button
                        type="submit"
                        className={`py-2 px-6 ml-2 rounded-full border border-[#dddddd]  ${
                            promoCode === "" ? "text-[#dddddd]" : "text-black"
                        } font-medium`}
                    >
                        Apply
                    </button>
                </div>
                <div>
                    <div className="flex justify-between font-medium pt-4">
                        <span className="flex items-center">
                            <p>Subtotal</p>
                            <span className="bg-black px-[4px] ml-2 text-white text-[8px] text-center rounded-full">
                                ?
                            </span>
                        </span>
                        <span>--</span>
                    </div>
                    <div className="flex justify-between font-medium pt-4">
                        <span className="flex items-center">
                            <p>Estimated Shipping & handling</p>
                        </span>
                        <span>--</span>
                    </div>
                    <div className="flex justify-between font-medium pt-4">
                        <span className="flex items-center">
                            <p>Estimated Tax</p>
                            <span className="bg-black px-[4px] ml-2 text-white text-[8px] text-center rounded-full">
                                ?
                            </span>
                        </span>
                        <span>--</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex justify-between py-5 font-medium pt-4">
                <span className="flex items-center">
                    <p>Total</p>
                </span>
                <span>--</span>
            </div>
        </div>
    );
};

export default BagData;
