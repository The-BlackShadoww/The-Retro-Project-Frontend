import React, { useState } from "react";
import { MagnifyingGlassIcon, CloseIcon } from "../../../assests/icons/Icons";

const Searchbar = ({ isSearch, searchHandler, searchInputRef }) => {
    const [input, setInput] = useState("");

    const handleValue = (e) => {
        setInput(e.target.value);
    };

    const removeValue = () => {
        setInput("");
    };

    return (
        <div
            className={`w-full h-screen fixed top-0 left-0 p-3 bg-white transition-all z-[100] ${
                isSearch ? null : "-translate-x-full"
            }`}
        >
            <div className="relative w-full inline-block m-auto">
                <div className="relative w-[85%] h-[40px] rounded-full bg-slate-200">
                    <input
                        type="search"
                        placeholder="search"
                        onChange={handleValue}
                        value={input}
                        className="w-full h-10 m-auto py-2 pl-[44px] pr-[50px] visible cursor-text bg-gray-100 text-inherit outline-none border-none rounded-full placeholder:opacity-50 placeholder:text-sm"
                        ref={searchInputRef}
                    />
                    <button className="absolute left-0 top-0 p-2 bg-gray-200 hover:bg-gray-300 rounded-full">
                        <MagnifyingGlassIcon />
                    </button>
                    <button
                        className={`absolute right-0 top-0 p-2 hover:bg-gray-300 rounded-full ${
                            input === "" ? "hidden" : "block"
                        }`}
                        onClick={removeValue}
                    >
                        <CloseIcon />
                    </button>
                </div>
                <button
                    className="absolute right-0 top-0 p-2 mobile_sm:text-[16px] text-[12px] font-bold cursor-pointer"
                    onClick={searchHandler}
                >
                    Cancel
                </button>
            </div>
            <div className="mt-16 p-3">
                <h6 className="text-gray-500">Popular Search Terms</h6>
                <ul className="mt-4">
                    <li>
                        <a href="https://learnwithsumit.com/">Air Force 1</a>
                    </li>
                    <li>
                        <a href="https://learnwithsumit.com/">Jordan</a>
                    </li>
                    <li>
                        <a href="https://learnwithsumit.com/">Air Max</a>
                    </li>
                    <li>
                        <a href="https://learnwithsumit.com/">Blazer</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Searchbar;

//! previous code

// import React from "react";
// import magnifyingGlassIcon from "../../assests/images/magnifyingIcon.png";

// const Searchbar = ({ isSearch, searchHandler, searchInputRef }) => {
//     return (
//         <div
//             className={`w-full h-screen fixed top-0 left-0 p-3 bg-white transition-all ${
//                 isSearch ? null : "-translate-x-full"
//             } z-[100]`}
//         >
//             <div className="flex justify-between items-center">
//                 <div className="flex justify-between items-center bg-slate-200 rounded-full">
//                     <span className="p-2 bg-slate-300 rounded-full">
//                         <img
//                             src={magnifyingGlassIcon}
//                             className="h-5"
//                             alt="img"
//                         />
//                     </span>
//                     <input
//                         type="text"
//                         placeholder="search"
//                         className="ml-2 p-2 bg-transparent outline-none placeholder:opacity-50 placeholder:text-sm"
//                         ref={searchInputRef}
//                     />
//                 </div>
//                 <span onClick={searchHandler} style={{ fontSize: 12 }}>
//                     Cancel
//                 </span>
//             </div>
//             <div className="mt-16 p-3">
//                 <h6 className="text-gray-500">Popular Search Terms</h6>
//                 <ul className="mt-4">
//                     <li>
//                         <a href="https://learnwithsumit.com/">Air Force 1</a>
//                     </li>
//                     <li>
//                         <a href="https://learnwithsumit.com/">Jordan</a>
//                     </li>
//                     <li>
//                         <a href="https://learnwithsumit.com/">Air Max</a>
//                     </li>
//                     <li>
//                         <a href="https://learnwithsumit.com/">Blazer</a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Searchbar;
