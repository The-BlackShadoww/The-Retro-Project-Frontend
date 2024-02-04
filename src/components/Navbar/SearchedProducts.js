import React from "react";
import { ProductImg } from "../UI/Media/AdvancedImg";
import { Link } from "react-router-dom";

const SearchedProducts = ({ closer, input, searchedProduct }) => {
    return (
        <>
            {searchedProduct.map((p) => (
                <Link
                    key={p.id}
                    to={`singleProduct/${p.id}`}
                    onClick={closer}
                    className={`${input.length > 0 ? "block" : "hidden"}`}
                >
                    <div
                        className={`w-full flex justify-between my-5 overflow-hidden`}
                    >
                        <div className="tablet:max-w-[200px] tablet:max-h-[200px] max-w-[150px] max-h-[150px] overflow-hidden">
                            <ProductImg img={p.main_img} />
                        </div>
                        <div className="text-end">
                            <p className="tablet:text-xl font-semibold">
                                {p.name}
                            </p>
                            <p className="tablet:text-xl font-semibold">
                                ${p.price}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
};

export default SearchedProducts;
