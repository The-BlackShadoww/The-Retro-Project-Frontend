import React, { Fragment, useContext, useEffect, useState } from "react";
import { HeartIcon, HeartIconFill } from "../../../assests/icons/Icons";
import {
    Button,
    LargeButtonBlack,
    LargeButtonWhite,
} from "../../UI/Buttons/Button";
import ProductSizes from "./ProductSizes";
import Modal from "../../UI/Modal/Modal";
import { BagContext, AllProducts, AuthToken } from "../../../contexts";
import BagModal from "./BagModal";
import Alert from "../../UI/Alert/Alert";

const ProductInfo = ({ data, formControl, handelModal, isModalOpen }) => {
    const { bag, setBag } = useContext(BagContext);
    const { token } = useContext(AuthToken);
    const { allProducts, setAllProducts } = useContext(AllProducts);
    const [size, setSize] = useState(null);
    const [modal, setModal] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [isTokenMissing, setIsTokenMissing] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (isTokenMissing) {
            setTimeout(() => {
                handleTokenChange();
            }, 2500);
        }
    }, [isTokenMissing]);

    const handleTokenChange = () => {
        setIsTokenMissing(!isTokenMissing);
    };

    const handleModalViewOpen = () => {
        setShowModal(true);
    };

    const handleModalViewClose = () => {
        setShowModal(false);
    };

    const handleBag = (item) => {
        const bagItems = {
            ...item,
            size: size,
            quantity: 1,
        };

        const found = bag.find((product) => product.id === item.id);

        if (token) {
            if (!found && size) {
                setBag([...bag, bagItems]);
                setModal([...modal, bagItems]);
                setModalTitle("Added to the bag");
                handleModalViewOpen();
                setTimeout(() => {
                    handleModalViewClose();
                }, 2000);
                setMessage("");
            } else {
                if (found) {
                    setMessage("* This product is already in the bag");
                    setTimeout(() => {
                        setMessage("");
                    }, 2000);
                } else if (!size) {
                    setMessage("* select a size please");
                }
            }
        } else {
            handleTokenChange();
        }
    };

    const handleSize = (e) => {
        const size = e.target.value;
        setSize(size);
    };

    const handelFavorite = (product) => {
        if (token) {
            const updatedProduct = allProducts.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        favorite: !item.favorite,
                    };
                } else {
                    return item;
                }
            });

            setAllProducts([...updatedProduct]);
        } else {
            handleTokenChange();
        }
    };

    //! with modal
    // const handelFavorite = (product) => {
    //     const newIsFavorite = !isFavorite;

    //     const updatedProduct = allProducts.map((item) => {
    //         if (item.id === product.id) {
    //             return {
    //                 ...item,
    //                 favorite: !item.favorite,
    //             };
    //         } else {
    //             return item;
    //         }
    //     });

    //     setAllProducts([...updatedProduct]);
    //     setModal([...modal, product]);
    //     setIsFavorite(newIsFavorite);
    //     if (newIsFavorite) {
    //         setModalTitle("Added to the Favorites");
    //     } else {
    //         setModalTitle("Removed from the Favorites");
    //     }
    //     handleModalViewOpen();
    //     setTimeout(() => {
    //         handleModalViewClose();
    //     }, 2000);
    // };

    let content;

    content = data.map((product) => (
        <Fragment key={product.id}>
            {isTokenMissing && (
                <Alert
                    onAlertChange={handleTokenChange}
                    message={"It seems you are not currently signed in"}
                >
                    <Button path={"/auth"}>Sign In</Button>
                </Alert>
            )}

            <BagModal
                showModal={showModal}
                bagModal={modal}
                onModalClose={handleModalViewClose}
                modalTitle={modalTitle}
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
                        <LargeButtonWhite
                            onClick={() => handelFavorite(product)}
                        >
                            <span className="flex">
                                <span className="pr-3">Favorite</span>
                                {product.favorite ? (
                                    <HeartIconFill />
                                ) : (
                                    <HeartIcon />
                                )}
                            </span>
                        </LargeButtonWhite>
                        <br />
                        <span className="text-lg text-red-600 font-semibold">
                            {message}
                        </span>
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
        </Fragment>
    ));

    return (
        <div className="tablet:w-[456px] w-full h-full">
            <div className="pl-[24px] pr-[48px] mt-[48px] py-1">{content}</div>
        </div>
    );
};

export default ProductInfo;
