import React from "react";
import { Link } from "react-router-dom";

const AdminRoutes = ({ name, icon, path }) => {
    return (
        <>
            <Link to={path}>
                <li className="hover:bg-[#f5f5f5] px-2 py-3 rounded-md">
                    <div className="flex items-center">
                        {icon}
                        <span className="pl-4">{name}</span>
                    </div>
                </li>
            </Link>
        </>
    );
};

export default AdminRoutes;
