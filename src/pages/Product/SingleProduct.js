import React, { useContext, useEffect } from "react";
import ProductDetails from "../../components/Product/productDetails/ProductDetails";
import { AllProducts, LocationContext } from "../../contexts";
import { useLocation } from "react-router-dom";

const SingleProduct = () => {
    const { allProducts } = useContext(AllProducts);
    const { setLocation } = useContext(LocationContext);
    const getLocation = useLocation();

    useEffect(() => {
        setLocation(getLocation.pathname);
    });

    return <ProductDetails data={allProducts} />;
};

export default SingleProduct;
