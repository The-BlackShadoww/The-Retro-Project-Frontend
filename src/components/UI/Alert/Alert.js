import React from "react";
import { CloseIcon } from "../../../assests/icons/Icons";
import "../../../assests/styles/global.css";

const Alert = ({ message, onAlertChange, children }) => {
    return (
        <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black/50 z-[100] backdrop-blur-sm">
            <div className="Poppins bg-white text-black max-h-[300px] h-full max-w-[500px] w-full mx-2 relative p-4 rounded-md border overflow-hidden">
                <span
                    onClick={onAlertChange}
                    className="absolute top-3 right-3 cursor-pointer"
                >
                    <CloseIcon />
                </span>
                <div className="h-full w-full flex flex-col gap-3 items-center justify-center">
                    <h1 className="text-xl font-semibold my-2">{message}</h1>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Alert;
