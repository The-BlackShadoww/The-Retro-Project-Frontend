import React from "react";

const InYourBag = ({ data }) => {
    let content;

    content = data.map((i) => (
        <div key={i.id} className="py-8">
            <div className="w-full flex justify-between pb-1">
                <span className="font-medium">Subtotal</span>
                <span className="font-medium">{i.subtotal}</span>
            </div>
            <div className="w-full flex justify-between pb-4">
                <span className="font-medium">Estimated Total</span>
                <span className="font-medium">{i.estimated}</span>
            </div>
            <div className="w-full flex justify-between">
                <span className="text-lg font-medium">Total</span>
                <span className="text-lg font-medium text-orange-500">
                    {" "}
                    $ {i.total}
                </span>
            </div>
            <hr className="my-8" />
        </div>
    ));

    return (
        <div className="basis-[30%] w-full tablet:order-2 order-1">
            <div className="w-full bg-[#f5f5f5] px-4 py-4">
                <h1 className="text-black text-2xl font-bold">In Your Bag</h1>
            </div>
            <div className="w-full px-4 border">{content}</div>
        </div>
    );
};

export default InYourBag;
