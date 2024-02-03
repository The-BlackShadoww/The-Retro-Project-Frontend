import React, { useContext, useEffect } from "react";
import ProductPresentation from "../../components/ProductPresentation/ProductPresentation";
import Data from "../../db/db.json";
import { useLocation } from "react-router-dom";
import { LocationContext } from "../../contexts";

const Women = () => {
    const { setLocation } = useContext(LocationContext);
    const getLocation = useLocation();

    useEffect(() => {
        setLocation(getLocation.pathname);
    });

    const data = Data.allGenderProducts;

    const dataForWomen = data.filter((item) => item.gender === "women");

    let content;

    content = <ProductPresentation data={dataForWomen} />;

    return content;
};

export default Women;
