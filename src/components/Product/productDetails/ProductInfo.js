import React from "react";
import { HeartIcon } from "../../../assests/icons/Icons";
import { LargeButtonBlack, LargeButtonWhite } from "../../UI/Buttons/Button";
import ProductSizes from "./ProductSizes";
import Modal from "../../UI/Modal/Modal";

const ProductInfo = ({ data, formControl, handelModal, isModalOpen }) => {
    let content;

    content = data.map((product) => (
        <>
            <div>
                <h4 className="text-2xl font-medium">{product.name}</h4>
                <p className="font-medium">
                    {product.gender} / {product.category}
                </p>
                <p className="py-4 font-medium">${product.price}</p>
            </div>
            <div className="">
                <form onSubmit={formControl}>
                    <ProductSizes />
                    <div className="pt-12">
                        <LargeButtonBlack path="">Add to Bag</LargeButtonBlack>
                        <LargeButtonWhite>
                            <span className="flex">
                                <span className="pr-3">Favorite</span>
                                <HeartIcon />
                            </span>
                        </LargeButtonWhite>
                        <div className="pt-8">
                            <p className="font-semibold">
                                {product.description}
                            </p>
                            <button
                                onClick={handelModal}
                                className="pt-4 text-base font-medium border-b border-black"
                            >
                                View product details
                            </button>
                        </div>
                    </div>
                </form>
                <Modal
                    handelModal={handelModal}
                    isModalOpen={isModalOpen}
                    productName={product.name}
                    price={product.price}
                    img={product.main_img}
                >
                    {product.description}
                </Modal>
            </div>
        </>
    ));

    return (
        <div className="tablet:w-[456px] w-full h-full">
            <div className="pl-[24px] pr-[48px] mt-[48px] py-1">{content}</div>
        </div>
    );
};

export default ProductInfo;
