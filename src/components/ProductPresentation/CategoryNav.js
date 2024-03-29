import React from "react";
import { Link } from "react-router-dom";

const CategoryNav = ({ i }) => {
    return (
        <div className="w-full h-[60px]  mb-5 flex tablet:flex-row flex-col  tablet:items-center">
            <h1 className="capitalize text-2xl">{i.gender}</h1>
            <nav className="flex flex-grow-[1] tablet:justify-center justify-start items-center">
                <ul className="flex">
                    <li className="pr-4 font-semibold hover:opacity-50 transition-all duration-200">
                        <Link to={`/product/${i.gender}/shoes`}>Shoes</Link>
                    </li>
                    <li className="px-4 font-semibold hover:opacity-50 transition-all duration-200">
                        <Link to={`/product/${i.gender}/clothing`}>
                            Clothing
                        </Link>
                    </li>
                    <li className="px-4 font-semibold hover:opacity-50 transition-all duration-200">
                        <Link to={`/product/${i.gender}/accessories`}>
                            Accessories
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default CategoryNav;
