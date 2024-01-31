import React from "react";
import { ProductImg } from "../../UI/Media/AdvancedImg";
import { CloseIcon } from "../../../assests/icons/Icons";
import { LargeButtonBlack } from "../../UI/Buttons/Button";

const BagModal = ({ showBagModal, bagModal, onModalClose }) => {
    return (
        <div
            className={`${
                showBagModal
                    ? "block fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-[100]"
                    : "hidden relative z-0"
            }`}
        >
            {bagModal.map((item) => (
                <div
                    key={item.id}
                    className="p-4 absolute tablet:top-[100px] tablet:right-[15px] top-[50%] right-[50%] tablet:-translate-x-[0] tablet:-translate-y-[0] translate-x-[50%] -translate-y-[50%] w-80 h-auto overflow-hidden bg-white"
                >
                    <div className="flex flex-col">
                        <div className="flex justify-between mb-4">
                            <span
                                role="img"
                                aria-label="check-mark"
                                className="flex"
                            >
                                ✅
                                <h4 className="font-semibold">Added to Bag</h4>
                            </span>
                            <span
                                onClick={onModalClose}
                                className="cursor-pointer"
                            >
                                <CloseIcon />
                            </span>
                        </div>
                        <div className="w-[100%] overflow-hidden mb-4">
                            <ProductImg img={item.main_img} />
                        </div>
                        <div>
                            <span className="font-semibold">{item.name}</span>
                            <br />
                            <span className="font-semibold">${item.price}</span>
                        </div>
                        <LargeButtonBlack path={"/bag"}>
                            View Bag
                        </LargeButtonBlack>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BagModal;
