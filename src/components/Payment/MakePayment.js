import React from "react";
import { GetBagTotal } from "../../utils/CalculateBag";

const MakePayment = () => {
    let content = (
        <div className="pt-8">
            <div className="w-full flex justify-between pb-1">
                <span className="font-medium">Subtotal</span>
                <span className="font-medium">
                    $<GetBagTotal />
                </span>
            </div>
            <div className="w-full flex justify-between pb-4">
                <span className="font-medium">Estimated Total</span>
                <span className="font-medium">
                    $<GetBagTotal />
                </span>
            </div>
            <div className="w-full flex justify-between">
                <span className="text-lg font-medium">Total</span>
                <span className="text-lg font-medium text-orange-600">
                    $<GetBagTotal />
                </span>
            </div>
            <hr className="my-8" />
        </div>
    );
    return (
        <div className="mt-5">
            <div className="w-full bg-[#f5f5f5] px-4 py-4">
                <h1 className="text-black text-2xl font-bold">Payment</h1>
            </div>
            <div className="w-full px-4 border">{content}</div>
            <button className="w-full text-white text-lg font-bold py-4 px-4 bg-orange-600 hover:bg-orange-700 tablet:relative fixed bottom-0 left-0 z-[10]">
                Make Payment
            </button>
        </div>
    );
};

export default MakePayment;
