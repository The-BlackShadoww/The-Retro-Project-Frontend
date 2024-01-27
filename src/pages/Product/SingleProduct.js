import React from "react";
import ProductDetails from "../../components/Product/productDetails/ProductDetails";
import Data from "../../db/db.json";

const SingleProduct = () => {
    const data = Data.products;
    return <ProductDetails data={data} />;
};

export default SingleProduct;
