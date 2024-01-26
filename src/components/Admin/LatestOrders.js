import React, { Fragment, useState } from "react";

const LatestOrders = ({ data }) => {
    const [latestOrders, setLatestOrders] = useState(data);

    let content;

    content = latestOrders.map((i) => (
        <Fragment key={i.id}>
            <tr className="border-b">
                <td className="p-3">{i.t_id}</td>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.amount}</td>
                {i.status === "Delivered" ? (
                    <td className="p-1.5 tracking-wider text-green-500 bg-green-700">
                        {i.status}
                    </td>
                ) : (
                    <td>{i.status}</td>
                )}
                <td>{i.date}</td>
            </tr>
        </Fragment>
    ));

    return (
        <>
            <table className="w-full text-center">
                <thead className="bg-[#f5f5f5]">
                    <tr>
                        <th className="p-3">Transaction_id</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>{content}</tbody>
            </table>
        </>
    );
};

export default LatestOrders;
