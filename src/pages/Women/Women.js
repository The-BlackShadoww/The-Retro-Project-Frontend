import React from "react";
import ProductPresentation from "../../components/ProductPresentation/ProductPresentation";
import Data from "../../db/db.json";

const Women = () => {
    const data = Data.allGenderProducts;

    const dataForWomen = data.filter((item) => item.gender === "women");

    let content;

    content = <ProductPresentation data={dataForWomen} />;

    return content;
};

export default Women;

//! previous code with redux
// import React from "react";
// import { useSelector } from "react-redux";
// import {
//     useGetAllGenderDataQuery,
//     selectAllGenderProduct,
// } from "../../services/ReduxRtkQuery/allGenderSlices/allGenderSlice";
// import ProductPresentation from "../../components/ProductPresentation/ProductPresentation";

// const Women = () => {
//     const {
//         // data: Data,
//         isLoading,
//         isError,
//         isSuccess,
//         error,
//     } = useGetAllGenderDataQuery();

//     const data = useSelector(selectAllGenderProduct);

//     const dataForWomen = data.filter((item) => item.gender === "women");

//     let content;

//     if (isLoading) {
//         content = <p>Loading...</p>;
//     } else if (isSuccess) {
//         content = <ProductPresentation data={dataForWomen} />;
//     } else if (isError) {
//         content = { error };
//     }

//     return content;
// };

// export default Women;
