import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import Searchbar from "./Searchbar";
import {
    BagIcon,
    PersonIcon,
    MagnifyingGlassIcon,
    HamburgerIcon,
} from "../../../assests/icons/Icons";
import { BagContext } from "../../../contexts";

const MobileNav = ({
    isSideNavOpen,
    isSearching,
    setIsSideNavOpen,
    mobileSearchHandler,
    mobileSiderHandler,
    searchInputRef,
    input,
    closer,
    removeValue,
    onSearch,
    searchedProduct,
}) => {
    const { bag } = useContext(BagContext);
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
                        <Link to={"/bag"} className="relative px-2">
                            {bag.length > 0 && (
                                <span className="absolute -top-[10%] -right-[0] bg-black text-white text-[10px] w-[18px] h-[18px] rounded-full flex justify-center items-center">
                                    {bag.length}
                                </span>
                            )}

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
                // onClick={mobileSiderHandler}
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
                isSearch={isSearching}
                searchHandler={mobileSearchHandler}
                searchInputRef={searchInputRef}
                input={input}
                closer={closer}
                removeValue={removeValue}
                onSearch={onSearch}
                searchedProduct={searchedProduct}
            />
        </div>
    );
};

export default MobileNav;
