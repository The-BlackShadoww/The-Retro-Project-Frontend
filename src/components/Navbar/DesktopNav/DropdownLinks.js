import React from "react";
import { Link } from "react-router-dom";
import "../Nav.css";
import "../../../assests/styles/global.css";
import Dropdown from "./Dropdown";

const DropdownLinks = () => {
    return (
        <div className="Poppins items-center">
            <ul className="w-[100% - 680px] max-w-[1255px] h-[60px] flex justify-center items-center mx-auto overflow-hidden Poppins">
                {/* All Products */}
                <div>
                    <Dropdown title={"Products"} path={"product"}>
                        <div className="flex flex-col text-left">
                            <Link to="" className="font-bold">
                                Winter Sale
                            </Link>
                            <Link to="">Shop up to 50% off</Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="" className="font-semibold mb-2">
                                New & Featured
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="" className="font-semibold mb-2">
                                All the Shoes
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="" className="font-semibold mb-2">
                                All the Clothes
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                        </div>
                    </Dropdown>
                </div>
                {/* Men */}
                <div>
                    <Dropdown title={"Men"} path={"men"}>
                        <div className="flex flex-col text-left">
                            <Link to="" className="font-semibold mb-2">
                                Winter Sale
                            </Link>
                            <Link to="">Shop up to 50% off</Link>
                            <Link to="">Men Section</Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="" className="font-semibold mb-2">
                                New & Featured
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="" className="font-semibold mb-2">
                                New for men
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="" className="font-semibold mb-2">
                                Shop Icon
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                        </div>
                    </Dropdown>
                </div>
                {/* Women */}
                <div>
                    <Dropdown title={"Women"} path={"women"}>
                        <div className="flex flex-col text-left">
                            <Link to="" className="font-semibold mb-2">
                                Winter Sale
                            </Link>
                            <Link to="">Shop up to 50% off</Link>
                            <Link to="">Women Section</Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="" className="font-semibold mb-2">
                                New & Featured
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="" className="font-semibold mb-2">
                                New for women
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                        </div>
                        <div className="flex flex-col">
                            <Link to="" className="font-semibold mb-2">
                                Shop Icon
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                        </div>
                    </Dropdown>
                </div>
                {/* Kids */}
                <div className="lg:block hidden">
                    <Dropdown title={"Kids"} path={"kids"}>
                        <div className="flex flex-col text-left">
                            <Link to="" className="font-semibold mb-2">
                                Winter Sale
                            </Link>
                            <Link to="">Shop up to 50% off</Link>
                            <Link to="">Kids Section</Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="" className="font-semibold mb-2">
                                New & Featured
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="" className="font-semibold mb-2">
                                New for Kids
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                        </div>
                        <div className="flex flex-col text-left">
                            <Link to="" className="font-semibold mb-2">
                                Shop Icon
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                            <Link
                                to=""
                                className="text-sm font-semibold text-gray-500 py-1 hover:text-black"
                            >
                                product
                            </Link>
                        </div>
                    </Dropdown>
                </div>
            </ul>
        </div>
    );
};

export default DropdownLinks;
