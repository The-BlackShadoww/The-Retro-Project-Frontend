import React, { useContext, useEffect } from "react";
import ProductShowcase from "../../components/ProductShowcase/ProductShowcase";
import { AllProducts, LocationContext } from "../../contexts";
import { useLocation } from "react-router-dom";

const Product = () => {
    const { allProducts } = useContext(AllProducts);
    const { setLocation } = useContext(LocationContext);
    const getLocation = useLocation();

    useEffect(() => {
        setLocation(getLocation.pathname);
    });

    let content;

    content = <ProductShowcase data={allProducts} />;

    return content;
};

export default Product;
