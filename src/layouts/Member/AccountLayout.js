import React from "react";
import { Outlet } from "react-router-dom";
import AccountNav from "../../components/Memeber/AccountNav";
import "../../assests/styles/global.css";

const AccountLayout = () => {
    return (
        <main>
            <div className="Poppins tablet:px-12 px-4">
                <AccountNav />
                <Outlet />
            </div>
        </main>
    );
};

export default AccountLayout;
