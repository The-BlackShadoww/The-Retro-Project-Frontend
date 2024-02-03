import React, { useContext, useEffect } from "react";
import ProductPresentation from "../../components/ProductPresentation/ProductPresentation";
import Data from "../../db/db.json";
import { LocationContext } from "../../contexts";
import { useLocation } from "react-router-dom";

const Kids = () => {
    const { setLocation } = useContext(LocationContext);
    const getLocation = useLocation();

    useEffect(() => {
        setLocation(getLocation.pathname);
    });

    const data = Data.allGenderProducts;

    const dataForKids = data.filter((item) => item.gender === "kids");

    let content;

    content = <ProductPresentation data={dataForKids} color={"white"} />;

    return content;
};

export default Kids;
