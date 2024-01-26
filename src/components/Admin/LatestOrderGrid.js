import React, { useState } from "react";

const LatestOrderGrid = ({ data }) => {
    const [latestOrders, setLatestOrders] = useState(data);

    let content;

    content = latestOrders.map((i) => (
        <div key={i.id} className="bg-gray-100 p-4 rounded-md shadow-sm">
            <div className="flex items-center">
                <span>{i.t_id}</span>
                <span className="mx-2">{i.date}</span>
                {i.status === "Delivered" ? (
                    <span className="p-1.5 tracking-wider text-green-500 bg-green-700">
                        {i.status}
                    </span>
                ) : (
                    <span>{i.status}</span>
                )}
            </div>
            <div className="flex flex-col">
                <span>{i.name}</span>
                <span>{i.email}</span>
                <span>{i.amount}</span>
            </div>
        </div>
    ));

    return <div className="w-full grid grid-cols-1 gap-4">{content}</div>;
};

export default LatestOrderGrid;
