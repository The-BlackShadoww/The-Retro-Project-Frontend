import React from "react";
import { GeneralProductImg } from "../UI/Media/AdvancedImg";

const Favorites = () => {
    const data = [
        {
            id: 0,
            name: "Product name",
            category: "category",
            price: "0",
            img: "/Retro/new_img_main_guigju",
        },
        {
            id: 1,
            name: "Product name",
            category: "category",
            price: "0",
            img: "/Retro/new_img_main_guigju",
        },
        {
            id: 2,
            name: "Product name",
            category: "category",
            price: "0",
            img: "/Retro/new_img_main_guigju",
        },
    ];

    let content;

    if (data.length === 0) {
        content = <p>Your favorites items will be add here</p>;
    } else {
        content = data.map((i) => (
            <div key={i.id}>
                <GeneralProductImg img={i.img} />
                <div className="pt-4 flex justify-between items-center">
                    <div>
                        <p className="font-medium">{i.name}</p>
                        <p className="font-medium text-[#757575]">
                            {i.category}
                        </p>
                    </div>
                    <div>
                        <p className="font-medium">${i.price}</p>
                    </div>
                </div>
            </div>
        ));
    }

    return (
        <main className="w-full tablet:mt-0 mt-10 mb-5">
            <div className="pb-5">
                <h1 className="text-2xl ">Favorites</h1>
            </div>
            <div className="grid tablet:grid-cols-3 grid-cols-2 tablet:gap-8 gap-4 py-5">
                {content}
            </div>
        </main>
    );
};

export default Favorites;
