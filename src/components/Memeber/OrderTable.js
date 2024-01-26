import React from "react";

const OrderTable = ({ data, formatDateTime }) => {
    return (
        <>
            <table className="border w-full text-center">
                <thead className="border">
                    <tr className="border  bg-[#f5f5f5]">
                        <th className="border py-4">#</th>
                        <th className="border py-4">Transaction ID</th>
                        <th className="border py-4">Status</th>
                        <th className="border py-4">Payment status</th>
                        <th className="border py-4">Product</th>
                        <th className="border py-4">Price</th>
                        <th className="border py-4">Quantity</th>
                        <th className="border py-4">Purchase Date</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((order, index) => (
                        <tr key={order.transaction_id} className="border">
                            <td className="border py-2">{index + 1}</td>
                            <td className="border">{order.transaction_id}</td>
                            <td className="border">{order.status}</td>
                            <td className="border">{order.paymentStatus}</td>
                            <td className="border">
                                {order.items.map((item) => (
                                    <div key={item._id}>{item.productName}</div>
                                ))}
                            </td>
                            <td className="border">
                                {order.items.map((item) => (
                                    <div key={item._id}>
                                        {item.price -
                                            (item.price * order.discount) / 100}
                                    </div>
                                ))}
                            </td>
                            <td className="border">
                                {order.items.map((item) => (
                                    <div key={item._id}>{item.count}</div>
                                ))}
                            </td>
                            <td className="border">
                                {order.items.map((item) => (
                                    <div key={item._id}>
                                        {formatDateTime(item.createdAt)}
                                    </div>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default OrderTable;
