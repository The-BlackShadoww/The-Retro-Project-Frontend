import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { signOut } from "../../services/authServices";
import { CurrentAccountContext } from "../../contexts";
import { PersonIcon } from "../../assests/icons/Icons";

const TopNav = () => {
    const { currentAccount } = useContext(CurrentAccountContext);

    let content;

    if (currentAccount) {
        content = (
            <>
                <p className="font-medium text-sm">
                    {currentAccount.firstName
                        ? `Hi, ${currentAccount.firstName}`
                        : ""}
                </p>
                <span className="px-3">|</span>
                <button onClick={signOut} className="font-medium text-sm pr-4">
                    Sign Out
                </button>
                <Link to="/member/profile">
                    <span>
                        <PersonIcon />
                    </span>
                </Link>
            </>
        );
    } else {
        content = (
            <>
                <Link to="/auth" className="font-medium text-sm pr-4">
                    Sign In
                </Link>
                <Link to="/member/profile">
                    <span>
                        <PersonIcon />
                    </span>
                </Link>
            </>
        );
    }

    return (
        <div className="w-full px-10 h-[40px] hidden tablet:flex justify-end items-center bg-[#f5f5f5]">
            {content}
        </div>
    );
};

export default TopNav;
