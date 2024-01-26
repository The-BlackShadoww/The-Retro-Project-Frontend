import React from "react";
import OrderSummary from "./OrderSummary";
import MakePayment from "./MakePayment";
import Shipment from "./Shipment";

const PaymentDetails = () => {
    const orders = [
        {
            id: 0,
            name: "Product Name",
            img: "/Retro/new_img_main_guigju",
            category: "category",
            price: 0,
            quantity: 0,
        },
        {
            id: 1,
            name: "Product Name",
            img: "/Retro/new_img_main_guigju",
            category: "category",
            price: 0,
            quantity: 0,
        },
    ];

    const amount = [
        {
            id: 0,
            subtotal: "---",
            estimated: "---",
            total: "---",
        },
    ];

    const shipment = [
        {
            id: 0,
            email: "email",
            phoneNumber: "phoneNumber",
            firstName: "firstName",
            lastName: "lastName",
            address1: "address1",
            address2: "address2",
            city: "city",
            postCode: "postCode",
            country: "country",
        },
    ];

    return (
        <main className="tablet:p-12 p-4">
            <div className="flex tablet:flex-row flex-col gap-5">
                <div className="basis-[60%] w-full h-full tablet:order-1 order-2">
                    <OrderSummary data={orders} />
                </div>
                <div className="basis-[40%] w-full tablet:order-2 order-1">
                    <Shipment data={shipment} />
                    <MakePayment data={amount} />
                </div>
            </div>
        </main>
    );
};

export default PaymentDetails;
