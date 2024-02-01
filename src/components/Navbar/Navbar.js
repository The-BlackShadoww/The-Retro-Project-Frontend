import React, { useRef, useState, useContext } from "react";
import logo from "../../assests/images/logo(PNG).png";
import { BagIcon, HeartIcon } from "../../assests/icons/Icons";
import { Link } from "react-router-dom";
import "../../assests/styles/global.css";
import DesktopNav from "./DesktopNav/DesktopNav";
import Search from "./DesktopNav/Search";
import MobileNav from "./MobileNav/MobileNav";
import { SearchContext, BagContext } from "../../contexts";

const Navbar = () => {
    const { search, setSearch } = useContext(SearchContext);
    const { bag } = useContext(BagContext);
    const [isSearching, setIsSearching] = useState(false);
    const [input, setInput] = useState("");
    //* mobile nav
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const [mobileSearch, setMobileSearch] = useState(false);

    const opener = () => {
        setIsSearching(true);
        setSearch(true);
    };

    const closer = () => {
        setIsSearching(false);
        setInput("");
    };

    const handleValue = (e) => {
        setInput(e.target.value);
    };

    const removeValue = () => {
        setInput("");
    };

    //* for mobile
    const searchInputRef = useRef();

    const mobileSiderHandler = () => {
        setIsSideNavOpen(!isSideNavOpen);
    };

    const mobileSearchHandler = () => {
        setMobileSearch(!mobileSearch);
        if (mobileSearch) {
            searchInputRef.current.blur();
        } else {
            searchInputRef.current.focus();
        }
    };

    return (
        <header className="w-full h-[60px] relative z-[100] Poppins">
            <div className="max-w-[1920px] max-h-[60px] mx-auto tablet:pr-[38px] tablet:pl-[36px] pr-3 pl-4 opacity-100 flex items-center">
                <div
                    className={`z-[100] visible  ${
                        isSearching ? "fixed top-2 left-2" : "relative"
                    } ${isSideNavOpen ? "relative z-[1]" : null}`}
                >
                    <Link to="/" className="my-[1px] h-[59px] w-[59px] block">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="w-[160px] flex-grow-[1] items-center">
                    <nav>
                        <MobileNav
                            isSideNavOpen={isSideNavOpen}
                            setIsSideNavOpen={setIsSideNavOpen}
                            mobileSearch={mobileSearch}
                            setMobileSearch={setMobileSearch}
                            mobileSearchHandler={mobileSearchHandler}
                            mobileSiderHandler={mobileSiderHandler}
                            searchInputRef={searchInputRef}
                        />
                        <DesktopNav />
                    </nav>
                    <Search
                        isSearching={isSearching}
                        setIsSearching={setIsSearching}
                        input={input}
                        setInput={setInput}
                        opener={opener}
                        closer={closer}
                        handleValue={handleValue}
                        removeValue={removeValue}
                    />
                </div>
                <div className="tablet:flex hidden z-[2]">
                    <Link to="member/favorites" className="mx-4">
                        <HeartIcon />
                    </Link>
                    <Link to={"/bag"} className="relative">
                        {bag.length > 0 && (
                            <span className="absolute -top-[5px] -right-[5px] bg-black text-white text-[10px] w-[18px] h-[18px] rounded-full flex justify-center items-center">
                                {bag.length}
                            </span>
                        )}

                        <BagIcon />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
