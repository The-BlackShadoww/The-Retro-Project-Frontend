import React from "react";
import { Button, ButtonOutlined } from "../../UI/Buttons/Button";
import {
    CaretRightIcon,
    CloseIcon,
    BagIcon,
    FileIcon,
} from "../../../assests/icons/Icons";
import { Link } from "react-router-dom";

const SideNav = ({ isSideNavOpen, siderHandler }) => {
    const show = (
        <div
            className={`bg-white p-5 w-72 h-screen text-1xl fixed top-0 right-0 transition-all z-[100] ${
                isSideNavOpen ? null : "translate-x-full"
            }`}
        >
            <div
                onClick={siderHandler}
                className="cursor-pointer w-full flex justify-end"
            >
                <CloseIcon />
            </div>
            <div className="mt-4">
                <div className="flex flex-col">
                    <Link
                        to={"men"}
                        className="flex justify-between items-center"
                        onClick={siderHandler}
                    >
                        Men <CaretRightIcon />
                    </Link>
                    <Link
                        to={"women"}
                        className="flex justify-between items-center mt-3"
                        onClick={siderHandler}
                    >
                        Women <CaretRightIcon />
                    </Link>
                    <Link
                        to={"kids"}
                        className="flex justify-between items-center mt-3"
                        onClick={siderHandler}
                    >
                        Kids <CaretRightIcon />
                    </Link>
                    <Link
                        to={"product"}
                        className="flex justify-between items-center mt-3"
                        onClick={siderHandler}
                    >
                        New & Featured <CaretRightIcon />
                    </Link>
                </div>

                <div className="mt-16 text-slate-600">
                    <p>Become a Retro member</p>
                    <div className="mt-5 cursor-pointer">
                        <Button path="/auth/resignation">Join Us</Button>
                        <ButtonOutlined path="/auth">log in</ButtonOutlined>
                    </div>
                </div>

                <div className="mt-16">
                    <Link
                        to="/bag"
                        className="text-sm mt-3 flex items-center"
                        onClick={siderHandler}
                    >
                        <span className="mr-4">
                            <BagIcon />
                        </span>
                        Bag
                    </Link>
                    <Link
                        to="/member/order"
                        className="text-sm mt-3 flex items-center"
                        onClick={siderHandler}
                    >
                        <span className="mr-4">
                            <FileIcon />
                        </span>
                        Orders
                    </Link>
                </div>
            </div>
        </div>
    );

    return <div>{show}</div>;
};

export default SideNav;
