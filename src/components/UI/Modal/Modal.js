import React from "react";
import { CloseIcon } from "../../../assests/icons/Icons";
import { ProductImg } from "../Media/AdvancedImg";

const Modal = ({ handelModal, isModalOpen, children }) => {
    return (
        <div
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
            className={`w-screen h-screen fixed top-0 left-0 z-[100] opacity-100 ${
                isModalOpen ? "flex" : "hidden"
            }  items-center justify-center inset-0`}
        >
            <div className="max-w-[920px] min-w-[400px] bg-white z-[110] rounded-xl p-4 relative overflow-auto inset-y-auto inset-x-4">
                <div
                    onClick={handelModal}
                    className="absolute top-2 right-2 cursor-pointer"
                >
                    <CloseIcon />
                </div>
                <div className="flex items-start pb-9">
                    <div className="w-[50px] h-[50px] overflow-hidden">
                        {/* Image will be dynamic */}
                        <ProductImg img={"/Retro/new_img_main_guigju"} />
                    </div>
                    <div className="pl-5">
                        {/* Product name will be dynamic */}
                        <p className="font-semibold">product name</p>
                        {/* Product price will be dynamic */}
                        <p className="font-semibold">$00</p>
                    </div>
                </div>
                <div className="font-semibold">
                    <p>{children}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
