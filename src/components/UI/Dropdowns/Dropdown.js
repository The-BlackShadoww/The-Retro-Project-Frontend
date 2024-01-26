// import React, { useState } from "react";
// import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

// export const Dropdown = ({ title, children }) => {
//     const [openDropdown, setOpenDropdown] = useState(false);

//     const handleDropdown = () => {
//         setOpenDropdown(!openDropdown);
//     };

//     const dropdownStyle = {
//         maxHeight: openDropdown ? "1000px" : "0",
//         opacity: openDropdown ? "1" : "0",
//         visibility: openDropdown ? "visible" : "hidden",
//         transformOrigin: "top",
//         transform: openDropdown ? "scaleY(1)" : "scaleY(0.8)",
//         transitionProperty: "max-height, opacity, visibility, transform",
//         transitionDuration: openDropdown ? "0.5s" : "0.5s", // Adjust duration for reveal vs hide
//         transitionTimingFunction: openDropdown ? "ease-in-out" : "ease-in-out", // Adjust timing for reveal vs hide
//     };

//     return (
//         <div className="w-full mb-9">
//             <div
//                 onClick={handleDropdown}
//                 className="flex justify-between items-center cursor-pointer"
//             >
//                 <h6 className="text-sm">{title}</h6>
//                 {openDropdown ? <MinusIcon /> : <PlusIcon />}
//             </div>
//             {/* <div className="max-[767px]:bg-slate-400"> */}
//             <div className={`max-[767px]:${dropdownStyle}`}>{children}</div>
//         </div>
//     );
// };

//! --------- 2 ----------

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
        //! it is a cleanup function which removes the handleResize function after the page renders for the first time.
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
