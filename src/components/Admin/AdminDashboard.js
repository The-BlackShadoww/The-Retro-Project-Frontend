import React, { Fragment, useState } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { FaBoxArchive } from "react-icons/fa6";
import LatestOrders from "./LatestOrders";
import LatestOrderGrid from "./LatestOrderGrid";
import Data from "../../db/db.json";

const AdminDashboard = () => {
    const a_LatestOrders = Data.a_latestOrders;
    const dummyData = { id: 0, sales: 1000, orders: 100, products: 99 };
    const [data, setData] = useState([dummyData]);

    let content;

    content = data.map((i) => (
        <Fragment key={i.id}>
            <div className="w-full h-20 p-2 rounded-sm shadow-sm border flex items-center justify-start">
                <div className="flex">
                    <AiFillDollarCircle size={50} />
                    <div className="ml-3">
                        <span>Total Sales</span>
                        <br />
                        <span>${i.sales}</span>
                    </div>
                </div>
            </div>
            <div className="w-full h-20 p-2 rounded-sm shadow-sm border flex items-center justify-start">
                <div className="flex">
                    <IoMdCart size={50} />
                    <div className="ml-3">
                        <span>Total Orders</span>
                        <br />
                        <span>{i.orders}</span>
                    </div>
                </div>
            </div>
            <div className="w-full h-20 p-2 rounded-sm shadow-sm border flex items-center justify-start">
                <div className="flex">
                    <FaBoxArchive size={50} />
                    <div className="ml-3">
                        <span>Total Products</span>
                        <br />
                        <span>{i.products}</span>
                    </div>
                </div>
            </div>
        </Fragment>
    ));

    return (
        <div className="relative w-full h-full">
            <h1 className="text-lg font-semibold mb-5">Dashboard</h1>
            <div className="grid tablet:grid-cols-3 grid-cols-1 gap-4">
                {content}
            </div>
            <div className="w-full mt-10">
                <div className="tablet:block hidden">
                    <LatestOrders data={a_LatestOrders} />
                </div>
                <div className="tablet:hidden block">
                    <LatestOrderGrid data={a_LatestOrders} />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
