import React, { useState, useEffect } from "react";
import { RxPlus, RxMinus } from "react-icons/rx";

export const Dropdown = ({ title, children }) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleDropdown = () => {
        setOpenDropdown(!openDropdown);
    };

    const mobileDropdownStyle = {
        maxHeight: openDropdown ? "1000px" : "0",
        opacity: openDropdown ? "1" : "0",
        visibility: openDropdown ? "visible" : "hidden",
        transformOrigin: "top",
        transform: openDropdown ? "scaleY(1)" : "scaleY(0.8)",
        transitionProperty: "max-height, opacity, visibility, transform",
        transitionDuration: openDropdown ? "0.5s" : "0.5s",
        transitionTimingFunction: openDropdown ? "ease-in-out" : "ease-in-out",
    };

    return (
        <div className="w-full mb-9">
            <div
                onClick={handleDropdown}
                className="flex justify-between items-center cursor-pointer md:cursor-default"
            >
                <h6 className="text-sm  md:mb-2">{title}</h6>
                <span className="md:hidden">
                    {openDropdown ? <RxMinus /> : <RxPlus />}
                </span>
            </div>
            <div style={isMobile ? mobileDropdownStyle : null}>{children}</div>
        </div>
    );
};
