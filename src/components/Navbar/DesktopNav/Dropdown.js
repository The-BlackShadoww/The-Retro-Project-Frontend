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
                className="py-6 px-4 font-semibold hover:opacity-50"
            >
                {title}
            </Link>
            {/* Dropdown container */}
            <div
                style={dropdownContainer}
                className="transition-all duration-300 ease-in-out p-5 bg-white"
            >
                <div
                    className={`max-w-[860px] mx-auto pb-4 flex justify-between ${
                        isOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-2"
                    } transition-all delay-300 ease-in`}
                >
                    {children}
                </div>
            </div>
        </li>
    );
};

export default Dropdown;
