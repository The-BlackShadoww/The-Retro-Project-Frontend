import React from "react";
import Gender from "./Gender";
import ShopByPrice from "./ShopByPrice";

const LeftSideNav = ({
    scrollY,
    isFilter,
    isMenChecked,
    isWomenChecked,
    isKidsChecked,
    is0_25Checked,
    is25_50Checked,
    is50_100Checked,
    isOver100Checked,
    handleCheck,
    onCategoryChange,
    onPriceChange,
}) => {
    return (
        <div
            className={`${
                isFilter ? "w-[240px] tablet:block" : "w-0 tablet:hidden"
            } fixed ${
                scrollY >= 20 ? "top-[60px]" : "top-[22%]"
            }  left-[3rem] right-auto pr-16 overflow-y-auto inset-0 hidden`}
        >
            <nav className={`relative pt-3 pb-8`}>
                <ul>
                    <li className="pb-2 font-medium">
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
                    <li className="pb-2 font-medium">
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
                    <li className="pb-2 font-medium">
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
            <hr />
            <Gender
                isMenChecked={isMenChecked}
                isWomenChecked={isWomenChecked}
                isKidsChecked={isKidsChecked}
                handleCheck={handleCheck}
            />
            <hr />
            <ShopByPrice
                is0_25Checked={is0_25Checked}
                is25_50Checked={is25_50Checked}
                is50_100Checked={is50_100Checked}
                isOver100Checked={isOver100Checked}
                handleCheck={handleCheck}
            />
        </div>
    );
};

export default LeftSideNav;
