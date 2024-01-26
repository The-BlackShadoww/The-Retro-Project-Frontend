import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Nav.css";
import "../../../assests/styles/global.css";

const Dropdown = ({ title, path, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onMouseEnter = () => {
        setIsOpen(true);
    };

    const onMouseLeave = () => {
        setIsOpen(false);
    };

    const dropdownContainer = {
        whiteSpace: "nowrap",
        opacity: isOpen ? "1" : "0",
        visibility: isOpen ? "visible" : "hidden",
        position: "absolute",
        overflow: "hidden",
        maxHeight: "800px",
        top: "60px",
        left: 0,
        right: 0,
        transformOrigin: "top center",
        transform: isOpen ? "scaleY(1)" : "scaleY(0)",
    };

    return (
        <li
            className="max-h-[90%] inline-block"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Link
                to={path}
                className="py-6 px-4 font-semibold"
            >
                {title}
            </Link>
            {/* Dropdown container */}
            <div style={dropdownContainer} className="bg-white transition p-5">
                <div className="max-w-[1344px] mx-auto pb-4 flex justify-between">
                    {children}
                </div>
            </div>
        </li>
    );
};

export default Dropdown;
