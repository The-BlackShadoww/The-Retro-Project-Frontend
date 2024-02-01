import React from "react";
import ProductPresentation from "../../components/ProductPresentation/ProductPresentation";
import Data from "../../db/db.json";

const Men = () => {
    const data = Data.allGenderProducts;

    const dataForMen = data.filter((item) => item.gender === "men");

    let content;

    content = <ProductPresentation data={dataForMen} />;

    return content;
};

export default Men;
