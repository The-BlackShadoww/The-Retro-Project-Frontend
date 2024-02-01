import React from "react";
import { FilterIcon } from "../../assests/icons/Icons";
import { CloseIcon } from "../../assests/icons/Icons";
import Gender from "./Gender";
import ShopByPrice from "./ShopByPrice";
import SortBy from "./SortBy";

const TabFilter = ({
    isTabFilterOpen,
    handleTabFilter,
    releasesNumber,
    isMenChecked,
    isWomenChecked,
    isKidsChecked,
    handleCheck,
    onSort,
    is0_25Checked,
    is25_50Checked,
    is50_100Checked,
    isOver100Checked,
}) => {
    return (
        <div className="tablet:hidden block mt-3">
            <div className="flex justify-between items-center px-4">
                <h5 className="font-medium text-gray-500">
                    {releasesNumber} Results
                </h5>
                <button
                    className="flex items-center px-5 py-[2px] text-lg border rounded-full hover:border-black"
                    onClick={handleTabFilter}
                >
                    <span className="pr-2">Filters</span>
                    <FilterIcon />
                </button>
            </div>
            <div
                className={`${
                    isTabFilterOpen ? "w-full h-screen" : "w-0 h-0"
                }    fixed ${
                    isTabFilterOpen ? "top-0" : "top-full"
                } left-0 py-4 px-7 z-[100] inset-0 overflow-auto bg-white`}
            >
                <div className="flex justify-between mb-7">
                    <span className="">Filters</span>
                    <button ton onClick={handleTabFilter}>
                        <CloseIcon />
                    </button>
                </div>
                <SortBy onSort={onSort} />
                <hr className="mb-4" />
                <Gender
                    isMenChecked={isMenChecked}
                    isWomenChecked={isWomenChecked}
                    isKidsChecked={isKidsChecked}
                    handleCheck={handleCheck}
                />
                <hr className="mb-4" />
                <ShopByPrice
                    is0_25Checked={is0_25Checked}
                    is25_50Checked={is25_50Checked}
                    is50_100Checked={is50_100Checked}
                    isOver100Checked={isOver100Checked}
                    handleCheck={handleCheck}
                />
            </div>
        </div>
    );
};

export default TabFilter;
