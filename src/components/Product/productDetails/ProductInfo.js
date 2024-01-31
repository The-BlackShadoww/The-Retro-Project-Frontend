import React, { useContext, useState } from "react";
import { HeartIcon } from "../../../assests/icons/Icons";
import { LargeButtonBlack, LargeButtonWhite } from "../../UI/Buttons/Button";
import ProductSizes from "./ProductSizes";
import Modal from "../../UI/Modal/Modal";
import { BagContext } from "../../../contexts";
import BagModal from "./BagModal";

const ProductInfo = ({ data, formControl, handelModal, isModalOpen }) => {
    const [size, setSize] = useState(null);
    const { bag, setBag } = useContext(BagContext);
    const [bagModal, setBagModal] = useState([]);
    const [showBagModal, setShowBagModal] = useState(false);

    const handleBagModalViewOpen = () => {
        setShowBagModal(true);
    };

    const handleBagModalViewClose = () => {
        setShowBagModal(false);
    };

    const handleBag = (item) => {
        const bagItems = {
            ...item,
            size: size,
            quantity: 1,
        };

        const found = bag.find((product) => product.id === item.id);

        if (!found && size) {
            setBag([...bag, bagItems]);
            setBagModal([...bagModal, bagItems]);
            handleBagModalViewOpen();
            setTimeout(() => {
                handleBagModalViewClose();
            }, 2000);
        } else {
            if (found) {
                alert("This product has already been added to bag");
            } else if (!size) {
                alert("select a size");
            }
        }
    };

    const handleSize = (e) => {
        const size = e.target.value;
        setSize(size);
    };

    let content;

    content = data.map((product) => (
        <>
            <BagModal
                showBagModal={showBagModal}
                bagModal={bagModal}
                onModalClose={handleBagModalViewClose}
            />
            <div>
                <h4 className="text-2xl font-medium">{product.name}</h4>
                <p className="font-medium">
                    {product.gender} / {product.category}
                </p>
                <p className="py-4 font-medium">${product.price}</p>
            </div>
            <div className="">
                <form onSubmit={formControl}>
                    <ProductSizes size={size} handleSize={handleSize} />
                    <div className="pt-12">
                        <LargeButtonBlack onClick={() => handleBag(product)}>
                            Add to Bag
                        </LargeButtonBlack>
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
