import React from "react";
import { PersonIcon, WalletIcon, LinkIcon } from "../../../assests/icons/Icons";
import { Link } from "react-router-dom";

const SideNav = () => {
    return (
        <div className="tablet:max-w-[290px] w-full">
            <nav>
                <ul className="flex tablet:flex-col flex-row w-full ">
                    <li className="pb-5 tablet:pr-0 pr-4">
                        <Link to="">
                            <div className="flex items-center">
                                <div className="mobile:block hidden">
                                    <PersonIcon />
                                </div>
                                <p className="mobile:pl-5 mobile:text-base text-xs font-medium">
                                    Account Details
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className="pb-5 tablet:pr-0 pr-4">
                        <Link to="payment">
                            <div className="flex items-center">
                                <div className="mobile:block hidden">
                                    <WalletIcon />
                                </div>
                                <p className="mobile:pl-5 mobile:text-base text-xs font-medium">
                                    Payment Methods
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className="pb-5 tablet:pr-0 pr-4">
                        <Link to="profile-visibility">
                            <div className="flex items-center">
                                <div className="mobile:block hidden">
                                    <LinkIcon />
                                </div>
                                <p className="tablet:pl-5 mobile:text-base text-xs font-medium">
                                    Profile Visibility
                                </p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideNav;
