import React from "react";
import ProductShowcase from "../../components/ProductShowcase/ProductShowcase";
import Data from "../../db/db.json";

const Product = () => {
    const data = Data.products;

    let content;

    content = <ProductShowcase data={data} />;

    return content;
};

export default Product;

//! previous code with redux
// import React from "react";
// import {
//     useGetProductDataQuery,
//     selectAllProducts,
//     selectProductIds,
//     selectProductsById,
// } from "../../services/ReduxRtkQuery/productSlices/productSlice";
// import { useSelector } from "react-redux";
// import ProductShowcase from "../../components/ProductShowcase/ProductShowcase";

// const Product = () => {
//     const {
//         // data: Data,
//         isLoading,
//         isError,
//         isSuccess,
//         error,
//     } = useGetProductDataQuery();

//     const data = useSelector(selectAllProducts);
//     const productIds = useSelector(selectProductIds);

//     let content;

//     if (isLoading) {
//         content = <p>Loading...</p>;
//     } else if (isSuccess) {
//         content = (
//             <ProductShowcase
//                 data={data}
//                 productIds={productIds}
//                 selectProductsById={selectProductsById}
//             />
//         );
//     } else if (isError) {
//         content = { error };
//     }

//     return content;
// };

// export default Product;
