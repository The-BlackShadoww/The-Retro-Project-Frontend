import React, { useContext } from "react";
import { GeneralProductImg } from "../UI/Media/AdvancedImg";
import { AllProducts } from "../../contexts";

const Favorites = () => {
    const { allProducts } = useContext(AllProducts);

    const findFavorites = allProducts.filter((item) => item.favorite === true);

    let content;

    if (findFavorites.length > 0) {
        content = findFavorites.map((i) => (
            <div key={i.id}>
                <GeneralProductImg img={i.main_img} />
                <div className="pt-4 flex justify-between items-center">
                    <div>
                        <p className="font-medium">{i.name}</p>
                        <p className="font-medium text-[#757575]">
                            {i.gender} / {i.category}
                        </p>
                    </div>
                    <div>
                        <p className="font-medium">${i.price}</p>
                    </div>
                </div>
            </div>
        ));
    } else {
        content = <p>Your favorites items will be add here</p>;
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
