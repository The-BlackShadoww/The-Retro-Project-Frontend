import React, { useContext, useEffect } from "react";
import ProductPresentation from "../../components/ProductPresentation/ProductPresentation";
import Data from "../../db/db.json";
import { useLocation } from "react-router-dom";
import { LocationContext } from "../../contexts";

const Men = () => {
    const { setLocation } = useContext(LocationContext);
    const getLocation = useLocation();

    useEffect(() => {
        setLocation(getLocation.pathname);
    });

    const data = Data.allGenderProducts;

    const dataForMen = data.filter((item) => item.gender === "men");

    let content;

    content = <ProductPresentation data={dataForMen} />;

    return content;
};

export default Men;
