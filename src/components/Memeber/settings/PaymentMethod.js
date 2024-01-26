import React from "react";
import { Button } from "../../UI/Buttons/Button";

const PaymentMethod = () => {
    return (
        <div className="max-w-[768px] w-full h-[70vh]">
            <div>
                <h1 className="text-2xl">Saved Payment Methods</h1>
                <p className="pt-5">
                    You currently don’t have any saved payment methods. Add a
                    method here to be prefilled for quicker checkout.
                </p>
            </div>
            <div className="flex justify-end mt-10">
                <Button title={"Add Payment Method"} />
            </div>
        </div>
    );
};

export default PaymentMethod;
