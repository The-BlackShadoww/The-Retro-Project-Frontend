import React, { useContext } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { FilterIcon } from "../../assests/icons/Icons";
import { SearchContext } from "../../contexts";

const TopNav = ({
    scrollY,
    releasesNumber,
    handleFilter,
    handleSortToggle,
    isFilter,
    isSortOpen,
    onSort,
    onCategoryChange,
}) => {
    const { search } = useContext(SearchContext);

    return (
        <div
            className={`flex tablet:flex-row flex-col tablet:px-0 px-4 tablet:py-0 py-4 tablet:items-center w-full tablet:h-[60px] h-auto ${
                scrollY >= 20
                    ? "fixed top-0 left-0 tablet:px-[3rem] z-10"
                    : "relative"
            } ${
                search ? "z-[1]" : null
            } tablet:border-none border-b-2 bg-white`}
        >
            <div>
                <h1 className="text-2xl font-medium">
                    New Releases<span>({releasesNumber})</span>
                </h1>
            </div>
            {/* Nav */}
            <div className="flex justify-start flex-grow-[1] mt-7 pb-4">
                <nav className="tablet:hidden block">
                    <ul className="flex">
                        <li className="pr-5 font-semibold  hover:opacity-50">
                            <input
                                type="radio"
                                name="category"
                                id="clothing"
                                value="clothing"
                                className="appearance-none"
                                onChange={onCategoryChange}
                            />
                            <label
                                htmlFor="clothing"
                                className="cursor-pointer hover:opacity-50"
                            >
                                Clothings
                            </label>
                        </li>
                        <li className="pr-5 font-semibold  hover:opacity-50">
                            <input
                                type="radio"
                                name="category"
                                id="shoes"
                                value="shoes"
                                className="appearance-none"
                                onChange={onCategoryChange}
                            />
                            <label
                                htmlFor="shoes"
                                className="cursor-pointer hover:opacity-50"
                            >
                                Shoes
                            </label>
                        </li>
                        <li className="pr-5 font-semibold  hover:opacity-50">
                            <input
                                type="radio"
                                name="category"
                                id="accessories"
                                value="accessories"
                                className="appearance-none"
                                onChange={onCategoryChange}
                            />
                            <label
                                htmlFor="accessories"
                                className="cursor-pointer hover:opacity-50"
                            >
                                Accessories
                            </label>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* Top Navigation */}
            <div className="tablet:flex hidden items-center">
                <button
                    className="flex items-center mr-6 text-lg"
                    onClick={handleFilter}
                >
                    <span className="pr-2">
                        {isFilter ? "Hide " : "Show "}Filters
                    </span>
                    <FilterIcon />
                </button>
                <button
                    className="tablet:flex hidden items-center text-lg"
                    onClick={handleSortToggle}
                >
                    <span className="pr-2">Sort By</span>
                    {isSortOpen ? <RxCaretUp /> : <RxCaretDown />}
                </button>
                <div
                    className={`absolute top-[60px] right-0 text-right px-8 py-5 rounded-b-lg bg-white transition-all z-[100] ${
                        isSortOpen ? "block" : "hidden"
                    }`}
                >
                    <form>
                        <span className="hover:opacity-50">
                            <input
                                type="radio"
                                name="sort"
                                id="newest"
                                value="newest"
                                className="appearance-none"
                                onChange={onSort}
                            />
                            <label htmlFor="newest" className="cursor-pointer">
                                Newest
                            </label>
                        </span>
                        <br />
                        <span className="hover:opacity-50">
                            <input
                                type="radio"
                                name="sort"
                                id="high_low"
                                value="high_low"
                                className="appearance-none"
                                onChange={onSort}
                            />
                            <label
                                htmlFor="high_low"
                                className="cursor-pointer"
                            >
                                Price: High-Low
                            </label>
                        </span>{" "}
                        <br />
                        <span className="hover:opacity-50">
                            <input
                                type="radio"
                                name="sort"
                                id="low_high"
                                value="low_high"
                                className="appearance-none"
                                onChange={onSort}
                            />
                            <label
                                htmlFor="low_high"
                                className="cursor-pointer"
                            >
                                Price: Low-High
                            </label>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TopNav;
