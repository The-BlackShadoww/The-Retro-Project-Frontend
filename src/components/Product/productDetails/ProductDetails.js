import React, { useEffect, useRef, useState } from "react";
import Thumbnail from "./Thumbnail";
import ProductInfo from "./ProductInfo";
import YouMightAlsoLike from "./YouMightAlsoLike";
import MobileProductSwiper from "./MobileProductSwiper";
import "./productDetails.css";
import { useParams } from "react-router-dom";

const ProductDetails = ({ data }) => {
    const { id } = useParams();
    const radioRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredProduct = data.filter((p) => p.id.toString() === id);
    const initialThumb = filteredProduct.map((p) => p.main_img);
    const [currentThumb, setCurrentThumb] = useState(initialThumb);
    const currentGender = filteredProduct.map((p) => p.gender);

    useEffect(() => {
        setCurrentThumb(initialThumb);
    }, [id, data]);

    const youMightAlsoLike = data.filter(
        (product) =>
            product.gender === currentGender[0] && product.id.toString() !== id
    );

    const handelModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const formControl = (e) => {
        e.preventDefault();
    };

    const handelThumbnail = (value) => {
        setCurrentThumb(value);
    };

    const handleMouseOver = (value) => {
        radioRef.current.value = value;
        radioRef.current.click();
        handelThumbnail(value);
    };

    return (
        <section>
            <div className="max-w-[1200px] mx-auto flex tablet:flex-row flex-col">
                {/* For Mobile */}
                <MobileProductSwiper data={filteredProduct} />
                {/* For Desktop */}
                <Thumbnail
                    handleMouseOver={handleMouseOver}
                    radioRef={radioRef}
                    currentThumb={currentThumb}
                    data={filteredProduct}
                />
                <ProductInfo
                    formControl={formControl}
                    handelModal={handelModal}
                    isModalOpen={isModalOpen}
                    data={filteredProduct}
                />
            </div>
            {/* Swiper part  */}
            <YouMightAlsoLike data={youMightAlsoLike} />
        </section>
    );
};

export default ProductDetails;

//! previous code with window reload
// import React, { useEffect, useRef, useState } from "react";
// import Thumbnail from "./Thumbnail";
// import ProductInfo from "./ProductInfo";
// import YouMightAlsoLike from "./YouMightAlsoLike";
// import MobileProductSwiper from "./MobileProductSwiper";
// import "./productDetails.css";
// import { useParams } from "react-router-dom";

// const ProductDetails = ({ data }) => {
//     const { id } = useParams();
//     const radioRef = useRef(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const filteredProduct = data.filter((p) => p.id.toString() === id);
//     // const initialThumb = filteredProduct.map((p) => p.main_img);
//     const initialThumb = filteredProduct.map((p) => p.images[0]);
//     const [currentThumb, setCurrentThumb] = useState(initialThumb);
//     const currentGender = filteredProduct.map((p) => p.gender);

//     const youMightAlsoLike = data.filter(
//         (product) =>
//             product.gender === currentGender[0] && product.id.toString() !== id
//     );

//     //* handling browser's forward and back arrows
//     const handlePopstate = () => {
//         window.location.reload();
//     };
//     useEffect(() => {
//         window.addEventListener("popstate", handlePopstate);

//         return () => {
//             window.removeEventListener("popstate", handlePopstate);
//         };
//     }, []);

//     const handelModal = () => {
//         setIsModalOpen(!isModalOpen);
//     };

//     const formControl = (e) => {
//         e.preventDefault();
//     };

//     const handelThumbnail = (value) => {
//         setCurrentThumb(value);
//     };

//     const handleMouseOver = (value) => {
//         radioRef.current.value = value; //* Set the radio input value on mouseover
//         radioRef.current.click(); //* Simulate a click event to select the radio input
//         handelThumbnail(value); //* Update the current thumbnail state
//     };

//     return (
//         <section>
//             <div className="max-w-[1200px] mx-auto flex tablet:flex-row flex-col">
//                 {/* For Mobile */}
//                 <MobileProductSwiper data={filteredProduct} />
//                 {/* For Desktop */}
//                 <Thumbnail
//                     handleMouseOver={handleMouseOver}
//                     radioRef={radioRef}
//                     currentThumb={currentThumb}
//                     data={filteredProduct}
//                 />
//                 <ProductInfo
//                     formControl={formControl}
//                     handelModal={handelModal}
//                     isModalOpen={isModalOpen}
//                     data={filteredProduct}
//                 />
//             </div>
//             {/* Swiper part  */}
//             <YouMightAlsoLike data={youMightAlsoLike} />
//         </section>
//     );
// };

// export default ProductDetails;
