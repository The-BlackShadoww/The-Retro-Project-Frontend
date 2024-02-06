import React from "react";
import { CloseIcon } from "../../../assests/icons/Icons";

const EditModal = ({ modal, onModal, message, children, title }) => {
    return (
        <div
            className={`${
                modal
                    ? "flex w-screen h-screen fixed top-0 left-0 justify-center items-center bg-black/20 z-[100] opacity-100 transition-opacity duration-300 delay-1000"
                    : "hidden opacity-0"
            }`}
        >
            <div
                className={`${
                    modal
                        ? "Poppins bg-white text-black h-auto max-w-[500px] w-full mx-2 relative px-10 py-12 rounded-3xl border overflow-hidden translate-y-0 transition-all duration-500 ease-in-out delay-150"
                        : "hidden translate-y-5"
                }`}
            >
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-semibold">{title}</h1>
                    <span
                        onClick={onModal}
                        className="cursor-pointer border border-black rounded-full p-1"
                    >
                        <CloseIcon />
                    </span>
                </div>
                <div className="h-full w-full flex flex-col gap-3 items-center justify-center">
                    <h1 className="text-xl font-semibold my-2">{message}</h1>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default EditModal;

