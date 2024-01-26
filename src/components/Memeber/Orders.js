import React, { Fragment } from "react";
import { Button } from "../UI/Buttons/Button";
import OrderTable from "./OrderTable";
import OrderGrid from "./OrderGrid";

const Orders = () => {
    const data = [
        {
            transaction_id: "transaction id",
            status: "status",
            paymentStatus: "paymentStatus",
            items: [
                {
                    _id: "",
                    productName: "product name",
                    price: 0,
                    count: 0,
                    createdAt: "date",
                },
            ],
            discount: 0,
        },
        {
            transaction_id: "transaction id",
            status: "status",
            paymentStatus: "paymentStatus",
            items: [
                {
                    _id: "",
                    productName: "product name",
                    price: 0,
                    count: 2,
                    createdAt: "date",
                },
            ],
            discount: 0,
        },
    ];

    const formatDateTime = (dateTimeString) => {
        const options = {
            // weekday: "short",
            weekday: "long",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        };
        return new Date(dateTimeString).toLocaleDateString("en-US", options);
    };

    let content;
    if (data.length > 0) {
        content = (
            <>
                <div className="tablet:block hidden">
                    <OrderTable formatDateTime={formatDateTime} data={data} />
                </div>
                <div className="tablet:hidden block">
                    <OrderGrid data={data} formatDateTime={formatDateTime} />
                </div>
            </>
        );
    } else {
        content = <h1>You don't have any order yet</h1>;
    }

    return (
        <main className="w-full h-[70vh]">
            <div className="w-full flex justify-between pb-4 tablet:pt-0 pt-4 px-2 border-b">
                <h1 className="text-2xl">Orders</h1>
                <Button title={"Continue Shopping"} path={"/product"} />
            </div>
            <div className="my-6">{content}</div>
        </main>
    );
};

export default Orders;
