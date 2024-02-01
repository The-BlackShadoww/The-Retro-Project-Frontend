import React, { useContext, useState } from "react";
import paypal from "../../assests/images/paypal.png";
import BagData from "./BagData";
import BagItems from "./BagItems";
import { LargeButtonBlack, LargeButtonWhite } from "../UI/Buttons/Button";
import { AllProducts, BagContext } from "../../contexts";

const BagDetails = () => {
    const { allProducts, setAllProducts } = useContext(AllProducts);
    const { bag, setBag } = useContext(BagContext);
    const [isCodeOpen, setIsCodeOpen] = useState(false);
    const [promoCode, setPromoCode] = useState("");

    const handelCode = () => {
        setIsCodeOpen(!isCodeOpen);
    };

    const getCode = (e) => {
        setPromoCode(e.target.value);
    };

    const handleQuantity = (e, item) => {
        const newQuantity = parseInt(e.target.value);

        const itemWithQuantity = {
            ...item,
            quantity: newQuantity,
        };

        const updatedBag = bag.map((product) =>
            product.id === item.id ? itemWithQuantity : product
        );

        // setBag(updatedBag);
        setBag([...updatedBag]);
    };

    const handleDelete = (productId) => {
        const filteredProducts = bag.filter((item) => item.id !== productId);
        setBag([...filteredProducts]);
    };

    const handelFavorite = (product) => {
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

        // updating the bag
        const updatedBag = bag.map((item) => {
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
        setBag([...updatedBag]);
    };

    return (
        <main>
            <div className="max-w-[1100px] mx-auto flex tablet:flex-row flex-col my-12 tablet:px-0 px-4">
                <BagItems
                    data={bag}
                    handleQuantity={handleQuantity}
                    onDelete={handleDelete}
                    onFavorite={handelFavorite}
                />
                <aside className="flex flex-col flex-grow-[1] px-2">
                    <h1 className="text-3xl font-medium mb-[24px] tablet:mt-0 mt-7">
                        Summary
                    </h1>
                    <BagData
                        promoCode={promoCode}
                        getCode={getCode}
                        handelCode={handelCode}
                        isCodeOpen={isCodeOpen}
                        bag={bag}
                    />
                    <hr />
                    <div className="mt-12">
                        <LargeButtonBlack path={"/checkout"}>
                            Checkout
                        </LargeButtonBlack>
                        <LargeButtonWhite path="">
                            <img
                                src={paypal}
                                alt="paypal"
                                className="w-[100px] "
                            />
                        </LargeButtonWhite>
                    </div>
                </aside>
            </div>
            <div className="fixed bottom-0 left-0 z-[50] w-full tablet:hidden block px-2">
                <LargeButtonBlack path="/checkout">Checkout</LargeButtonBlack>
            </div>
        </main>
    );
};

export default BagDetails;

// import React, { useState } from "react";
// import paypal from "../../assests/images/paypal.png";
// import YouMightAlsoLike from "../Product/productDetails/YouMightAlsoLike";
// import BagData from "./BagData";
// import BagItems from "./BagItems";
// import { LargeButtonBlack, LargeButtonWhite } from "../UI/Buttons/Button";

// const BagDetails = () => {
//     const [isCodeOpen, setIsCodeOpen] = useState(false);
//     const [promoCode, setPromoCode] = useState("");

//     const handelCode = () => {
//         setIsCodeOpen(!isCodeOpen);
//     };

//     const getCode = (e) => {
//         setPromoCode(e.target.value);
//     };

//     const data = [
//         {
//             id: 0,
//             name: "product name",
//             img: "/Retro/new_img_main_guigju",
//             category: "category",
//             price: 0,
//         },
//         {
//             id: 1,
//             name: "product name",
//             img: "/Retro/new_img_main_guigju",
//             category: "category",
//             price: 0,
//         },
//     ];

//     return (
//         <main>
//             <div className="max-w-[1100px] mx-auto flex tablet:flex-row flex-col mt-12 tablet:px-0 px-4">
//                 <BagItems data={data} />
//                 <aside className="flex flex-col flex-grow-[1] px-2">
//                     <h1 className="text-3xl font-medium mb-[24px] tablet:mt-0 mt-7">
//                         Summary
//                     </h1>
//                     <BagData
//                         promoCode={promoCode}
//                         getCode={getCode}
//                         handelCode={handelCode}
//                         isCodeOpen={isCodeOpen}
//                     />
//                     <hr />
//                     <div className="mt-12">
//                         <LargeButtonBlack path={"/checkout"}>
//                             Checkout
//                         </LargeButtonBlack>
//                         <LargeButtonWhite path="">
//                             <img
//                                 src={paypal}
//                                 alt="paypal"
//                                 className="w-[100px] "
//                             />
//                         </LargeButtonWhite>
//                     </div>
//                 </aside>
//             </div>
//             <div className="fixed bottom-0 left-0 z-[100] w-full tablet:hidden block px-2">
//                 <LargeButtonBlack path="checkout">Checkout</LargeButtonBlack>
//             </div>
//             <YouMightAlsoLike data={data} />
//         </main>
//     );
// };

// export default BagDetails;
