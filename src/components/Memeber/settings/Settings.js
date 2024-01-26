import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

const Settings = () => {
    return (
        <div className="tablet:pl-20 px-0 tablet:mt-0 mt-10">
            <div className="pb-5">
                <h1 className="text-2xl">Settings</h1>
            </div>
            <div className="flex tablet:flex-row flex-col mt-8">
                <SideNav />
                <Outlet />
            </div>
        </div>
    );
};

export default Settings;
