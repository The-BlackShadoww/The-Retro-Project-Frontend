import React from "react";
import { MdDashboard } from "react-icons/md";
import AdminRoutes from "./AdminRoutes";
import { FaBoxArchive } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import AdminProfile from "./AdminProfile";
import FixedLinks from "./FixedLinks";

const DashNav = ({ isNavOpen, handleNav }) => {
    return (
        <div
            className={`${
                isNavOpen ? "w-[310px]" : "w-[50px]"
            }  h-screen  fixed top-0 left-0 px-0 z-[100]`}
        >
            {/* Fix Nav */}
            <FixedLinks />
            {/* The Nav */}
            <div
                className={`w-[260px] h-full shadow-xl z-[5] border-r border-gray-300 bg-white transition-all absolute ${
                    isNavOpen ? "left-[50px]" : "left-[-210px]"
                }`}
            >
                {/* Admin profile */}
                <AdminProfile isNavOpen={isNavOpen} handleNav={handleNav} />
                {/* Routes */}
                <div className="w-full h-full p-3">
                    <ul>
                        <AdminRoutes
                            name={"Dashboard"}
                            icon={<MdDashboard />}
                            path={"."}
                        />
                        <AdminRoutes
                            name={"Products"}
                            icon={<FaBoxArchive />}
                            path={"products"}
                        />
                        <AdminRoutes
                            name={"Categories"}
                            icon={<MdCategory />}
                            path={"category"}
                        />
                        <AdminRoutes
                            name={"Customers"}
                            icon={<HiUserGroup />}
                            path={"customers"}
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashNav;
