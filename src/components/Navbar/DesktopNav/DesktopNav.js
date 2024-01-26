import React from "react";
import DropdownLinks from "./DropdownLinks";

const DesktopNav = () => {
    return (
        <div className="w-full absolute left-0 top-0 text-center tablet:block hidden">
            <DropdownLinks />
        </div>
    );
};

export default DesktopNav;
