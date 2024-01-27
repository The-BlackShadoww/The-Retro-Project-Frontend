import React from "react";
import { CloseIcon } from "../../../assests/icons/Icons";
import { ProductImg } from "../Media/AdvancedImg";

const Modal = ({
    handelModal,
    isModalOpen,
    children,
    productName,
    price,
    img,
}) => {
    return (
        <div
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
            className={`w-screen h-screen fixed top-0 left-0 z-[100] opacity-100 ${
                isModalOpen ? "flex" : "hidden"
            }  items-center justify-center inset-0 backdrop-blur-sm`}
        >
            <div className="max-w-[920px] min-w-[400px] w-full bg-white z-[110] rounded-xl p-5 relative overflow-auto inset-y-auto mx-8">
                <div
                    onClick={handelModal}
                    className="absolute top-3 right-3 cursor-pointer"
                >
                    <CloseIcon />
                </div>
                <div className="flex items-start pb-9">
                    <div className="w-[50px] h-[50px] overflow-hidden">
                        <ProductImg img={img} />
                    </div>
                    <div className="pl-5">
                        <p className="font-semibold">{productName}</p>
                        <p className="font-semibold">${price}</p>
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
