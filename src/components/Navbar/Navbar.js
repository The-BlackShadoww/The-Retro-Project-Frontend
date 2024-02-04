import React, { useRef, useState, useContext } from "react";
import logo from "../../assests/images/logo(PNG).png";
import { BagIcon, HeartIcon } from "../../assests/icons/Icons";
import { Link } from "react-router-dom";
import "../../assests/styles/global.css";
import DesktopNav from "./DesktopNav/DesktopNav";
import Search from "./DesktopNav/Search";
import MobileNav from "./MobileNav/MobileNav";
import { SearchContext, BagContext, AllProducts } from "../../contexts";

const Navbar = () => {
    const { allProducts } = useContext(AllProducts);
    const { setSearch } = useContext(SearchContext);
    const { bag } = useContext(BagContext);
    const [isSearching, setIsSearching] = useState(false);
    const [input, setInput] = useState("");
    const [searchedProduct, setSearchedProduct] = useState([]);
    //* mobile nav
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    const opener = () => {
        setIsSearching(true);
        setSearch(true);
    };

    const closer = () => {
        setIsSearching(false);
        setInput("");
    };

    const handleSearch = (e) => {
        let searchTerm = e.target.value;
        setInput(e.target.value);

        const findProduct = allProducts.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (findProduct) {
            setSearchedProduct([...findProduct]);
        } else {
            setSearchedProduct([]);
        }
    };

    const removeValue = () => {
        setInput("");
        setSearchedProduct([]);
    };

    //* for mobile
    const searchInputRef = useRef();

    const mobileSiderHandler = () => {
        setIsSideNavOpen(!isSideNavOpen);
    };

    const mobileSearchHandler = () => {
        setIsSearching(!isSearching);
        if (isSearching) {
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
                            isSearching={isSearching}
                            mobileSearchHandler={mobileSearchHandler}
                            mobileSiderHandler={mobileSiderHandler}
                            input={input}
                            closer={closer}
                            removeValue={removeValue}
                            onSearch={handleSearch}
                            searchedProduct={searchedProduct}
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
                        handleSearch={handleSearch}
                        removeValue={removeValue}
                        searchedProduct={searchedProduct}
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
