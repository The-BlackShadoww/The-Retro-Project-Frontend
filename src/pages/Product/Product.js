import React, { useContext } from "react";
import ProductShowcase from "../../components/ProductShowcase/ProductShowcase";
import { AllProducts } from "../../contexts";

const Product = () => {
    const { allProducts } = useContext(AllProducts);
    let content;

    content = <ProductShowcase data={allProducts} />;

    return content;
};

export default Product;
