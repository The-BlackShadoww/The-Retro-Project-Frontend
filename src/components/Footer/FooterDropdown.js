import React from "react";
import { Dropdown } from "../UI/Dropdowns/Dropdown";
import { Link } from "react-router-dom";

const FooterDropdown = () => {
    return (
        <div className="flex flex-col md:flex-row ">
            {/* -------- 1 ------- */}
            <Dropdown title={"Get help"}>
                <ul>
                    <li>
                        <Link
                            to=""
                            className="text-[11px] opacity-[65%] hover:opacity-100"
                        >
                            Info
                        </Link>
                    </li>
                    <li>
                        <Link
                            to=""
                            className="text-[11px] opacity-[65%] hover:opacity-100"
                        >
                            Info
                        </Link>
                    </li>{" "}
                    <li>
                        <Link
                            to=""
                            className="text-[11px] opacity-[65%] hover:opacity-100"
                        >
                            Info
                        </Link>
                    </li>
                </ul>
            </Dropdown>
            {/* ------- 2 -------- */}
            <Dropdown title={"About Retro"}>
                <ul>
                    <li>
                        <Link
                            to=""
                            className="text-[11px] opacity-[65%] hover:opacity-100"
                        >
                            Info
                        </Link>
                    </li>
                    <li>
                        <Link
                            to=""
                            className="text-[11px] opacity-[65%] hover:opacity-100"
                        >
                            Info
                        </Link>
                    </li>{" "}
                    <li>
                        <Link
                            to=""
                            className="text-[11px] opacity-[65%] hover:opacity-100"
                        >
                            Info
                        </Link>
                    </li>
                </ul>
            </Dropdown>
            {/* ------- 3 ------ */}
            <Dropdown title={"Promotions & Discounts"}>
                <ul>
                    <li>
                        <Link
                            to=""
                            className="text-[11px] opacity-[65%] hover:opacity-100"
                        >
                            Info
                        </Link>
                    </li>
                    <li>
                        <Link
                            to=""
                            className="text-[11px] opacity-[65%] hover:opacity-100"
                        >
                            Info
                        </Link>
                    </li>{" "}
                    <li>
                        <Link
                            to=""
                            className="text-[11px] opacity-[65%] hover:opacity-100"
                        >
                            Info
                        </Link>
                    </li>
                </ul>
            </Dropdown>
        </div>
    );
};

export default FooterDropdown;
