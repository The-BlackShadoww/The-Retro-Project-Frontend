import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashNav from "../../components/Admin/DashNav";
import "../../assests/styles/global.css";
import AdminSearchBar from "../../components/Admin/AdminSearchBar";

const Admin = () => {
    const [isNavOpen, setIsNavOpen] = useState(true);

    const handleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <main className="w-full h-full relative Poppins">
            <DashNav isNavOpen={isNavOpen} handleNav={handleNav} />
            <div
                className={`${
                    isNavOpen ? "w-[calc(100%-310px)]" : "w-[calc(100%-50px)]"
                } h-full absolute top-0 right-0 p-0 `}
            >
                <AdminSearchBar isNavOpen={isNavOpen} />
                <div className="w-[95%] mx-auto p-4 ">
                    <Outlet />
                </div>
            </div>
        </main>
    );
};

export default Admin;
