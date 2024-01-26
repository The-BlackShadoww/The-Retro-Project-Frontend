import React from "react";

const OrderGrid = ({ data, formatDateTime }) => {
    let content;

    content = data.map((item) => (
        <div
            key={item.transaction_id}
            className="my-2 p-4 rounded-md shadow-sm border"
        >
            <span>Transaction Id: {item.transaction_id}</span>
            <br />
            <span>Status: {item.status}</span> <br />
            <span>payment Status: {item.paymentStatus}</span> <br />
            <span>
                {item.items.map((p) => (
                    <span key={p._id}>Product Name: {p.productName}</span>
                ))}
            </span>
            <br />
            <span>
                {item.items.map((p) => (
                    <span key={p._id}>Price: {p.price}</span>
                ))}
            </span>
            <br />
            <span>
                {item.items.map((p) => (
                    <span key={p._id}>Quantity: {p.count}</span>
                ))}
            </span>
            <br />
            <span>
                {item.items.map((p) => (
                    <span key={p._id}>
                        Purchase Date: {formatDateTime(item.createdAt)}
                    </span>
                ))}
            </span>
            <br />
        </div>
    ));

    return <div className="w-full grid grid-cols-1">{content}</div>;
};

export default OrderGrid;
