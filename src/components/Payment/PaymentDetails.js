import React from "react";
import OrderSummary from "./OrderSummary";
import MakePayment from "./MakePayment";
import Shipment from "./Shipment";

const PaymentDetails = () => {
    return (
        <main className="tablet:p-12 p-4">
            <div className="flex tablet:flex-row flex-col gap-5">
                <div className="basis-[60%] w-full h-full tablet:order-1 order-2">
                    <OrderSummary />
                </div>
                <div className="basis-[40%] w-full tablet:order-2 order-1">
                    <Shipment />
                    <MakePayment />
                </div>
            </div>
        </main>
    );
};

export default PaymentDetails;
