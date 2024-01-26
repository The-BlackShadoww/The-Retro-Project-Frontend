import React, { useState } from "react";
import paypal from "../../assests/images/paypal.png";
import YouMightAlsoLike from "../Product/productDetails/YouMightAlsoLike";
import BagData from "./BagData";
import BagItems from "./BagItems";
import { LargeButtonBlack, LargeButtonWhite } from "../UI/Buttons/Button";

const BagDetails = () => {
    const [isCodeOpen, setIsCodeOpen] = useState(false);
    const [promoCode, setPromoCode] = useState("");

    const handelCode = () => {
        setIsCodeOpen(!isCodeOpen);
    };

    const getCode = (e) => {
        setPromoCode(e.target.value);
    };

    const data = [
        {
            id: 0,
            name: "product name",
            img: "/Retro/new_img_main_guigju",
            category: "category",
            price: 0,
        },
        {
            id: 1,
            name: "product name",
            img: "/Retro/new_img_main_guigju",
            category: "category",
            price: 0,
        },
    ];

    return (
        <main>
            <div className="max-w-[1100px] mx-auto flex tablet:flex-row flex-col mt-12 tablet:px-0 px-4">
                <BagItems data={data} />
                <aside className="flex flex-col flex-grow-[1] px-2">
                    <h1 className="text-3xl font-medium mb-[24px] tablet:mt-0 mt-7">
                        Summary
                    </h1>
                    <BagData
                        promoCode={promoCode}
                        getCode={getCode}
                        handelCode={handelCode}
                        isCodeOpen={isCodeOpen}
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
            <div className="fixed bottom-0 left-0 z-[100] w-full tablet:hidden block px-2">
                <LargeButtonBlack path="/checkout">Checkout</LargeButtonBlack>
            </div>
            <YouMightAlsoLike data={data} />
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
