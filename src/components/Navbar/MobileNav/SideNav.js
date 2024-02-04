import React, { useContext } from "react";
import { Button, ButtonOutlined, ButtonWhite } from "../../UI/Buttons/Button";
import {
    CaretRightIcon,
    CloseIcon,
    BagIcon,
    FileIcon,
} from "../../../assests/icons/Icons";
import { Link } from "react-router-dom";
import { AuthToken, CurrentAccountContext } from "../../../contexts";
import { signOut } from "../../../services/authServices";

const SideNav = ({ isSideNavOpen, siderHandler }) => {
    const { currentAccount } = useContext(CurrentAccountContext);
    const { token } = useContext(AuthToken);

    const show = (
        <div
            className={`bg-white p-5 w-72 h-screen text-1xl fixed top-0 right-0 transition-all ${
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
                {currentAccount && (
                    <span className="text-lg font-semibold">
                        Hi, {currentAccount.firstName}
                    </span>
                )}

                <div className="flex flex-col">
                    <Link
                        to={"product"}
                        className="flex justify-between items-center mt-3 font-medium"
                        onClick={siderHandler}
                    >
                        Products <CaretRightIcon />
                    </Link>
                    <Link
                        to={"men"}
                        className="flex justify-between items-center mt-3 font-medium"
                        onClick={siderHandler}
                    >
                        Men <CaretRightIcon />
                    </Link>
                    <Link
                        to={"women"}
                        className="flex justify-between items-center mt-3 font-medium"
                        onClick={siderHandler}
                    >
                        Women <CaretRightIcon />
                    </Link>
                    <Link
                        to={"kids"}
                        className="flex justify-between items-center mt-3 font-medium"
                        onClick={siderHandler}
                    >
                        Kids <CaretRightIcon />
                    </Link>
                </div>

                <div className="mt-16 text-slate-600">
                    <p className="font-medium">Become a Retro member</p>
                    <div className="mt-5 cursor-pointer">
                        <Button path="/auth/resignation">Join Us</Button>
                        <ButtonOutlined path="/auth">log in</ButtonOutlined>
                    </div>
                </div>

                <div className="mt-16">
                    <Link
                        to="/bag"
                        className="text-sm mt-3 flex items-center font-medium"
                        onClick={siderHandler}
                    >
                        <span className="mr-4">
                            <BagIcon />
                        </span>
                        Bag
                    </Link>
                    <Link
                        to="/member/order"
                        className="text-sm mt-3 flex items-center font-medium"
                        onClick={siderHandler}
                    >
                        <span className="mr-4">
                            <FileIcon />
                        </span>
                        Orders
                    </Link>
                </div>
                {token && (
                    <button
                        onClick={signOut}
                        className="font-semibold mt-8 underline"
                    >
                        SignOut
                    </button>
                )}
            </div>
        </div>
    );

    return <div>{show}</div>;
};

export default SideNav;
