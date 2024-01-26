import React from "react";
import { CloseIcon, MagnifyingGlassIcon } from "../../../assests/icons/Icons";
import "../Nav.css";
import { Link } from "react-router-dom";

const Search = ({
    isSearching,
    setIsSearching,
    input,
    setInput,
    opener,
    closer,
    handleValue,
    removeValue,
}) => {
    return (
        <div
            className={`${
                isSearching
                    ? "fixed top-0 left-0 w-screen h-screen z-[10] bg-black/40 backdrop-blur-sm"
                    : null
            }`}
        >
            <div
                className={`tablet:block hidden ${
                    isSearching ? "warper backdrop-blur-sm" : null
                } bg-white`}
            >
                {/* Flex search box here */}
                <div className="flex justify-end mb-2">
                    {/* Search contain */}
                    <div className="w-full inline-block m-auto pt-2 bg-white">
                        {/* input box */}
                        <div
                            className={`relative ${
                                isSearching
                                    ? "w-[656px] transform-x"
                                    : "w-48 transform-0"
                            } my-auto mx-0 float-right transition-all`}
                        >
                            <input
                                className={`w-full h-10 m-auto py-2 pl-[44px] pr-[50px] visible cursor-text bg-gray-100 text-inherit outline-none border-none rounded-full`}
                                type="search"
                                tabIndex="0"
                                placeholder="Search"
                                onKeyDownCapture={opener}
                                onChange={handleValue}
                                value={input}
                            />
                            {/* inline-flex and hidden */}
                            <button
                                className={`absolute top-[2px] right-[2px] px-2 py-[6px]  rounded-full z-[2] text-center hover:bg-gray-200 ${
                                    isSearching ? "inline-flex" : "hidden"
                                }`}
                                onClick={removeValue}
                            >
                                <CloseIcon />
                            </button>
                            <button className="absolute top-[2px] left-[2px] px-2 py-[6px] flex items-center  rounded-full hover:bg-gray-200">
                                <MagnifyingGlassIcon />
                            </button>
                        </div>
                        <button
                            onClick={closer}
                            className={`${
                                isSearching ? "visible" : "invisible"
                            } absolute top-2 right-8 font-bold p-4 bg-transparent cursor-pointer`}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
                {/* Search result div */}
                <div
                    className={`${
                        isSearching ? "w-full" : "w-0"
                    }  max-h-[100vh] absolute top-[60px] ${
                        isSearching
                            ? "right-0 -translate-y-[8px]"
                            : "right-[-100%]"
                    } p-3 transition-all overflow-y-scroll bg-white`}
                >
                    <div className="w-[656px] mx-auto p-8">
                        <div className="">
                            <p className="pb-4 font-bold">
                                Popular search items
                            </p>
                            <ul>
                                <li>
                                    <Link to="">product 1</Link>
                                </li>
                                <li>
                                    <Link to="">product 2</Link>
                                </li>
                                <li>
                                    <Link to="">product 3</Link>
                                </li>
                                <li>
                                    <Link to="">product 4</Link>
                                </li>
                                <li>
                                    <Link to="">product 5</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;

//! with state
// import React, { useState } from "react";
// import { CloseIcon, MagnifyingGlassIcon } from "../../../assests/icons/Icons";
// import "../Nav.css";
// import { Link } from "react-router-dom";

// const Search = () => {
//     const [isSearching, setIsSearching] = useState(false);
//     const [input, setInput] = useState("");

//     const opener = () => {
//         setIsSearching(true);
//     };

//     const closer = () => {
//         setIsSearching(false);
//         setInput("");
//     };

//     const handleValue = (e) => {
//         setInput(e.target.value);
//     };

//     const removeValue = () => {
//         setInput("");
//     };

//     return (
//         <div
//             className={`${
//                 isSearching
//                     ? "fixed top-0 left-0 w-screen h-screen z-50 bg-black/40 backdrop-blur-sm"
//                     : null
//             }`}
//         >
//             <div
//                 className={`tablet:block hidden ${
//                     isSearching ? "warper backdrop-blur-sm" : null
//                 } bg-white`}
//             >
//                 {/* Flex search box here */}
//                 <div className="flex justify-end mb-2">
//                     {/* Search contain */}
//                     <div className="w-full inline-block m-auto pt-2 bg-white">
//                         {/* input box */}
//                         <div
//                             className={`relative ${
//                                 isSearching
//                                     ? "w-[656px] transform-x"
//                                     : "w-48 transform-0"
//                             } my-auto mx-0 float-right transition-all`}
//                         >
//                             <input
//                                 className={`w-full h-10 m-auto py-2 pl-[44px] pr-[50px] visible cursor-text bg-gray-100 text-inherit outline-none border-none rounded-full`}
//                                 type="search"
//                                 tabIndex="0"
//                                 placeholder="Search"
//                                 onKeyDownCapture={opener}
//                                 onChange={handleValue}
//                                 value={input}
//                             />
//                             {/* inline-flex and hidden */}
//                             <button
//                                 className={`absolute top-[2px] right-[2px] px-2 py-[6px]  rounded-full z-[2] text-center hover:bg-gray-200 ${
//                                     isSearching ? "inline-flex" : "hidden"
//                                 }`}
//                                 onClick={removeValue}
//                             >
//                                 <CloseIcon />
//                             </button>
//                             <button className="absolute top-[2px] left-[2px] px-2 py-[6px] flex items-center  rounded-full hover:bg-gray-200">
//                                 <MagnifyingGlassIcon />
//                             </button>
//                         </div>
//                         <button
//                             onClick={closer}
//                             className={`${
//                                 isSearching ? "visible" : "invisible"
//                             } absolute top-2 right-8 font-bold p-4 bg-transparent cursor-pointer`}
//                         >
//                             Cancel
//                         </button>
//                     </div>
//                 </div>
//                 {/* Search result div */}
//                 <div
//                     className={`${
//                         isSearching ? "w-full" : "w-0"
//                     }  max-h-[100vh] absolute top-[60px] ${
//                         isSearching ? "right-0 -translate-y-[8px]" : "right-[-100%]"
//                     } p-3 transition-all overflow-y-scroll bg-white`}
//                 >
//                     <div className="w-[656px] mx-auto p-8">
//                         <div className="">
//                             <p className="pb-4 font-bold">
//                                 Popular search items
//                             </p>
//                             <ul>
//                                 <li>
//                                     <Link to="">product 1</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="">product 2</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="">product 3</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="">product 4</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="">product 5</Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Search;
