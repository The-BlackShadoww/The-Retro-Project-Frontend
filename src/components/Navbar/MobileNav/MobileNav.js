import React from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import Searchbar from "./Searchbar";
import {
    BagIcon,
    PersonIcon,
    MagnifyingGlassIcon,
    HamburgerIcon,
} from "../../../assests/icons/Icons";

const MobileNav = ({
    isSideNavOpen,
    setIsSideNavOpen,
    mobileSearch,
    setMobileSearch,
    mobileSearchHandler,
    mobileSiderHandler,
    searchInputRef,
}) => {
    return (
        <div className="tablet:hidden block">
            <div>
                <div className="">
                    {/* Icons */}
                    <div className="flex justify-end items-center">
                        <span
                            onClick={mobileSearchHandler}
                            className="cursor-pointer px-2"
                        >
                            <MagnifyingGlassIcon />
                        </span>
                        <Link to="/bag" className="cursor-pointer px-2">
                            <BagIcon />
                        </Link>
                        <Link
                            to="/member/profile"
                            className="cursor-pointer px-2"
                        >
                            <PersonIcon />
                        </Link>
                        <span
                            onClick={mobileSiderHandler}
                            className="cursor-pointer px-2"
                        >
                            <HamburgerIcon />
                        </span>
                    </div>
                </div>
            </div>
            <div
                onClick={mobileSiderHandler}
                className={`${
                    isSideNavOpen
                        ? "fixed top-0 left-0 w-screen h-screen z-50 bg-black/40 backdrop-blur-sm"
                        : null
                }`}
            >
                {/* Sider nav */}
                <SideNav
                    isSideNavOpen={isSideNavOpen}
                    siderHandler={mobileSiderHandler}
                />
            </div>
            {/* Searchbar */}
            <Searchbar
                isSearch={mobileSearch}
                searchHandler={mobileSearchHandler}
                searchInputRef={searchInputRef}
            />
        </div>
    );
};

export default MobileNav;

//! with state
// import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import SideNav from "./SideNav";
// import Searchbar from "./Searchbar";
// import {
//     BagIcon,
//     PersonIcon,
//     MagnifyingGlassIcon,
//     HamburgerIcon,
// } from "../../../assests/icons/Icons";

// const MobileNav = () => {
//     const [isSideNavOpen, setIsSideNavOpen] = useState(false);
//     const [search, setSearch] = useState(false);

//     const searchInputRef = useRef();

//     const siderHandler = () => {
//         setIsSideNavOpen(!isSideNavOpen);
//     };

//     const searchHandler = () => {
//         setSearch(!search);
//         if (search) {
//             searchInputRef.current.blur();
//         } else {
//             searchInputRef.current.focus();
//         }
//     };

//     return (
//         <div className="tablet:hidden block">
//             <div className="">
//                 <div className="">
//                     {/* Icons */}
//                     <div className="flex justify-end items-center">
//                         <span
//                             onClick={searchHandler}
//                             className="cursor-pointer px-2"
//                         >
//                             <MagnifyingGlassIcon />
//                         </span>
//                         <Link to="/bag" className="cursor-pointer px-2">
//                             <BagIcon />
//                         </Link>
//                         <Link
//                             to="/member/profile"
//                             className="cursor-pointer px-2"
//                         >
//                             <PersonIcon />
//                         </Link>
//                         <span
//                             onClick={siderHandler}
//                             className="cursor-pointer px-2"
//                         >
//                             <HamburgerIcon />
//                         </span>
//                     </div>
//                 </div>
//             </div>
//             {/* Sider nav */}
//             <SideNav
//                 isSideNavOpen={isSideNavOpen}
//                 siderHandler={siderHandler}
//             />
//             {/* Searchbar */}
//             <Searchbar
//                 isSearch={search}
//                 searchHandler={searchHandler}
//                 searchInputRef={searchInputRef}
//             />
//         </div>
//     );
// };

// export default MobileNav;
