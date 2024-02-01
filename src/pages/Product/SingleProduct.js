import React, { useContext } from "react";
import ProductDetails from "../../components/Product/productDetails/ProductDetails";
import { AllProducts } from "../../contexts";

const SingleProduct = () => {
    const { allProducts } = useContext(AllProducts);
    return <ProductDetails data={allProducts} />;
};

export default SingleProduct;
