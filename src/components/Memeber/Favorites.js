import React, { useContext, useEffect } from "react";
import { GeneralProductImg } from "../UI/Media/AdvancedImg";
import { AllProducts, LocationContext } from "../../contexts";
import { Link, useLocation } from "react-router-dom";

const Favorites = () => {
    const { allProducts } = useContext(AllProducts);
    const { setLocation } = useContext(LocationContext);
    const getLocation = useLocation();

    useEffect(() => {
        setLocation(getLocation.pathname);
    });

    const findFavorites = allProducts.filter((item) => item.favorite === true);

    let content;

    if (findFavorites.length > 0) {
        content = findFavorites.map((i) => (
            <Link key={i.id} to={`/singleProduct/${i.id}`}>
                <div>
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
            </Link>
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
