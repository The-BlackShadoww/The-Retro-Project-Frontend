import React from "react";

const SortBy = ({ onSort }) => {
    return (
        <div className={`pt-3 pb-6 font-medium`}>
            <h4>Sort By</h4>
            <ul className="pt-4">
                <li className="flex items-center pb-4">
                    <input
                        type="radio"
                        name="radioGroup"
                        id="newestRadio"
                        value="newest"
                        className="relative peer shrink-0 w-[18px] h-[18px] appearance-none border-2 border-gray-500 rounded-full bg-white outline-none cursor-pointer"
                        onChange={onSort}
                    />
                    <label htmlFor="newestRadio" className="pl-2">
                        Newest
                    </label>
                    <span className="absolute h-[10px] w-[10px] ml-1 rounded-full bg-black hidden peer-checked:block pointer-events-none"></span>
                </li>

                <li className="flex items-center pb-4">
                    <input
                        type="radio"
                        name="radioGroup"
                        id="h-lRadio"
                        value="high_low"
                        className="relative peer shrink-0 w-[18px] h-[18px] appearance-none border-2 border-gray-500 rounded-full bg-white outline-none cursor-pointer"
                        onChange={onSort}
                    />
                    <label htmlFor="h-lRadio" className="pl-2">
                        Price: Heigh - Low
                    </label>
                    <span className="absolute h-[10px] w-[10px] ml-1 rounded-full bg-black hidden peer-checked:block pointer-events-none"></span>
                </li>

                <li className="flex items-center pb-4">
                    <input
                        type="radio"
                        name="radioGroup"
                        id="l-hRadio"
                        value="low_high"
                        className="relative peer shrink-0 w-[18px] h-[18px] appearance-none border-2 border-gray-500 rounded-full bg-white outline-none cursor-pointer"
                        onChange={onSort}
                    />
                    <label htmlFor="l-hRadio" className="pl-2">
                        Price: Low - Heigh
                    </label>
                    <span className="absolute h-[10px] w-[10px] ml-1 rounded-full bg-black hidden peer-checked:block pointer-events-none"></span>
                </li>
            </ul>
        </div>
    );
};

export default SortBy;
