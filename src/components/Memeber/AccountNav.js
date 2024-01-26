import React from "react";
import { Link } from "react-router-dom";

const AccountNav = () => {
    return (
        <header className="w-full h-[60px] flex items-center tablet:justify-center justify-start pt-10 ">
            <nav>
                <ul className="w-full flex flex-grow-[1] justify-center">
                    <li>
                        <Link to="profile" className="pr-6 font-semibold">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="order" className="pr-6 font-semibold">
                            Orders
                        </Link>
                    </li>
                    <li>
                        <Link to="favorites" className="pr-6 font-semibold">
                            Favorites
                        </Link>
                    </li>
                    <li>
                        <Link to="settings" className="pr-6 font-semibold">
                            Settings
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default AccountNav;
