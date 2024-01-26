import React from "react";
import { Link } from "react-router-dom";
import "../../../assests/styles/global.css";

export const Button = ({ title, children, path }) => {
    return (
        <Link to={path}>
            <button className="Poppins text-white text-sm bg-[#111111] px-5 py-2 mx-1 md:my-0 my-2 rounded-full transition-all hover:opacity-50">
                <span className="font-semibold text-base">
                    {children}
                    {title}
                </span>
            </button>
        </Link>
    );
};

export const ButtonWhite = ({ children, path }) => {
    return (
        <Link to={path}>
            <button className="Poppins text-sm font-bold text-[#111111] bg-white px-5 py-2 mr-1 rounded-3xl transition-all hover:opacity-50">
                <span className="font-semibold text-base">{children}</span>
            </button>
        </Link>
    );
};

export const ButtonOutlined = ({ children, path }) => {
    return (
        <Link to={path}>
            <button className="Poppins text-black text-sm bg-transparent border px-5 py-2 mx-1 md:my-0 my-2 rounded-full transition-all hover:opacity-50">
                <span className="font-semibold text-base">{children}</span>
            </button>
        </Link>
    );
};

export const LargeButtonBlack = ({ children, path }) => {
    return (
        <Link to={path}>
            <button className="w-full bg-black text-white text-lg font-semibold p-4 my-3 rounded-full hover:opacity-50">
                {children}
            </button>
        </Link>
    );
};

export const LargeButtonWhite = ({ children, path }) => {
    return (
        <Link to={path}>
            <button className="w-full bg-white text-black text-lg font-semibold p-4 border border-gray-200 rounded-full flex justify-center items-center hover:border-black">
                {children}
            </button>
        </Link>
    );
};
