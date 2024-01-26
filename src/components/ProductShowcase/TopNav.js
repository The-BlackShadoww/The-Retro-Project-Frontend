import React, { useContext } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { FilterIcon } from "../../assests/icons/Icons";
import { Link } from "react-router-dom";
import { SearchContext } from "../../contexts";

const TopNav = ({
    scrollY,
    releasesNumber,
    handleFilter,
    handleSort,
    isFilter,
    isSortOpen,
}) => {
    const { search } = useContext(SearchContext);

    return (
        <div
            className={`flex tablet:flex-row flex-col tablet:px-0 px-4  tablet:items-center w-full tablet:h-[60px] h-auto ${
                scrollY >= 20
                    ? "fixed top-0 left-0 tablet:px-[3rem]"
                    : "relative"
            } ${
                search ? "z-[1]" : "z-10"
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
                            <Link>Clothings</Link>
                        </li>
                        <li className="pr-5 font-semibold  hover:opacity-50">
                            <Link>Shoes</Link>
                        </li>
                        <li className="pr-5 font-semibold hover:opacity-50">
                            <Link>Accessories</Link>
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
                    onClick={handleSort}
                >
                    <span className="pr-2">Sort By</span>
                    {isSortOpen ? <RxCaretUp /> : <RxCaretDown />}
                </button>
                <div
                    className={`absolute top-[60px] right-0 text-right px-8 py-5 rounded-b-lg bg-white transition-all z-[100] ${
                        isSortOpen ? "block" : "hidden"
                    }`}
                >
                    <ul>
                        <li className="hover:opacity-50">
                            <button>Featured</button>
                        </li>
                        <li className="hover:opacity-50">
                            <button>Newest</button>
                        </li>
                        <li className="hover:opacity-50">
                            <button>Price: High-Low </button>
                        </li>
                        <li className="hover:opacity-50">
                            <button>Price: Low-High </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TopNav;

//! previous code
// import React from "react";
// import { RxCaretDown, RxCaretUp } from "react-icons/rx";
// import { FilterIcon } from "../../assests/icons/Icons";
// import { Link } from "react-router-dom";

// const TopNav = ({
//     scrollY,
//     releasesNumber,
//     handleFilter,
//     handleSort,
//     isFilter,
//     isSortOpen,
// }) => {
//     return (
//         <div
//             className={`flex tablet:flex-row flex-col tablet:px-0 px-4  tablet:items-center w-full tablet:h-[60px] h-auto ${
//                 scrollY >= 20
//                     ? "fixed top-0 left-0 tablet:px-[3rem]  z-10"
//                     : "relative"
//             } tablet:border-none border-b-2 bg-white`}
//         >
//             <div>
//                 <h1 className="text-2xl font-medium">
//                     New Releases<span>({releasesNumber})</span>
//                 </h1>
//             </div>
//             {/* Nav */}
//             <div className="flex justify-start flex-grow-[1] mt-7 pb-4">
//                 <nav className="tablet:hidden block">
//                     <ul className="flex">
//                         <li className="pr-5 font-semibold  hover:opacity-50">
//                             <Link>Clothings</Link>
//                         </li>
//                         <li className="pr-5 font-semibold  hover:opacity-50">
//                             <Link>Shoes</Link>
//                         </li>
//                         <li className="pr-5 font-semibold hover:opacity-50">
//                             <Link>Accessories</Link>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//             {/* Top Navigation */}
//             <div className="tablet:flex hidden items-center">
//                 <button
//                     className="flex items-center mr-6 text-lg"
//                     onClick={handleFilter}
//                 >
//                     <span className="pr-2">
//                         {isFilter ? "Hide " : "Show "}Filters
//                     </span>
//                     <FilterIcon />
//                 </button>
//                 <button
//                     className="tablet:flex hidden items-center text-lg"
//                     onClick={handleSort}
//                 >
//                     <span className="pr-2">Sort By</span>
//                     {isSortOpen ? <RxCaretUp /> : <RxCaretDown />}
//                 </button>
//                 <div
//                     className={`absolute top-[60px] right-0 text-right px-8 py-5 rounded-b-lg bg-white transition-all z-[100] ${
//                         isSortOpen ? "block" : "hidden"
//                     }`}
//                 >
//                     <ul>
//                         <li className="hover:opacity-50">
//                             <button>Featured</button>
//                         </li>
//                         <li className="hover:opacity-50">
//                             <button>Newest</button>
//                         </li>
//                         <li className="hover:opacity-50">
//                             <button>Price: High-Low </button>
//                         </li>
//                         <li className="hover:opacity-50">
//                             <button>Price: Low-High </button>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TopNav;
