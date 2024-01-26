import React from "react";
import { ProductImg } from "../UI/Media/AdvancedImg";
import { Link } from "react-router-dom";

const ProductGrid = ({ data, isFilter, windowWidth }) => {
    let dynamicWidth;
    if (windowWidth <= 960) {
        dynamicWidth = { width: "100%" };
    } else {
        dynamicWidth = isFilter
            ? { width: "calc(100% - 240px)" }
            : { width: "100%" };
    }

    let content = data.map((i) => (
        <Link to={i.path} key={i.id}>
            <div>
                <ProductImg img={i.img.main_img} />

                <div className="pt-4 tablet:px-0 px-3">
                    <h5 className="text-lg font-medium">{i.name}</h5>
                    <h5 className="pb-1 font-medium opacity-60">
                        {i.gender === "" ? i.kids : i.gender}'s {i.category}
                    </h5>
                    <h5 className="pb-2 font-medium opacity-60">
                        {Object.keys(i.colors).length} colors
                    </h5>
                    <h5 className="text-lg font-medium">${i.price}</h5>
                </div>
            </div>
        </Link>
    ));

    return (
        <div
            style={dynamicWidth}
            className={`ml-auto mb-14 grid tablet:grid-cols-3 grid-cols-2 tablet:gap-x-4 gap-x-2 gap-y-14 tablet:`}
        >
            {content}
        </div>
    );
};

export default ProductGrid;