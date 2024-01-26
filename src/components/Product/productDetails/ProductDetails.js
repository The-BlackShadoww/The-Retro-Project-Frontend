import React, { useRef, useState } from "react";
import Modal from "../../UI/Modal/Modal";
import Thumbnail from "./Thumbnail";
import ProductInfo from "./ProductInfo";
import YouMightAlsoLike from "./YouMightAlsoLike";
import MobileProductSwiper from "./MobileProductSwiper";
import "./productDetails.css";

const ProductDetails = () => {
    // const productId = useParams("id");
    const radioRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentThumb, setCurrentThumb] = useState(
        "/Retro/new_img_main_guigju"
    );

    const handelModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const formControl = (e) => {
        e.preventDefault();
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
        {
            id: 2,
            name: "product name",
            img: "/Retro/new_img_main_guigju",
            category: "category",
            price: 0,
        },
        {
            id: 3,
            name: "product name",
            img: "/Retro/new_img_main_guigju",
            category: "category",
            price: 0,
        },
    ];

    const handelThumbnail = (value) => {
        setCurrentThumb(value);
    };

    const handleMouseOver = (value) => {
        radioRef.current.value = value; //* Set the radio input value on mouseover
        radioRef.current.click(); //* Simulate a click event to select the radio input
        handelThumbnail(value); //* Update the current thumbnail state
    };

    return (
        <section>
            <div className="max-w-[1200px] mx-auto flex tablet:flex-row flex-col">
                {/* For Mobile */}
                <MobileProductSwiper data={data} />
                {/* For Desktop */}
                <Thumbnail
                    handleMouseOver={handleMouseOver}
                    radioRef={radioRef}
                    currentThumb={currentThumb}
                    data={data}
                />
                <ProductInfo
                    formControl={formControl}
                    handelModal={handelModal}
                />
            </div>
            {/* Modal */}
            <Modal handelModal={handelModal} isModalOpen={isModalOpen}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati aut, eius suscipit, sint labore, beatae assumenda iste
                dolor aliquam accusantium ratione laudantium odit! Assumenda
                ipsam dolorem quibusdam quidem ullam aperiam sint aliquid
            </Modal>
            {/* Swiper part  */}
            <YouMightAlsoLike data={data} />
        </section>
    );
};

export default ProductDetails;
