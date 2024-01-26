import React from "react";
import ProductPresentation from "../../components/ProductPresentation/ProductPresentation";
import Data from "../../db/db.json";

const Men = () => {
    const data = Data.allGenderProducts;
    
    const dataForMen = data.filter((item) => item.gender === "men");

    let content;

    content = <ProductPresentation data={dataForMen} />;

    return content;
};

export default Men;

//! previous code with redux
// import React from "react";
// import { useSelector } from "react-redux";
// import {
//     useGetAllGenderDataQuery,
//     selectAllGenderProduct,
// } from "../../services/ReduxRtkQuery/allGenderSlices/allGenderSlice";
// import ProductPresentation from "../../components/ProductPresentation/ProductPresentation";

// const Men = () => {
//     const {
//         // data: Data,
//         isLoading,
//         isError,
//         isSuccess,
//         error,
//     } = useGetAllGenderDataQuery();

//     const data = useSelector(selectAllGenderProduct);

//     const dataForMen = data.filter((item) => item.gender === "men");
//     console.log(dataForMen);

//     let content;

//     if (isLoading) {
//         content = <p>Loading...</p>;
//     } else if (isSuccess) {
//         content = <ProductPresentation data={dataForMen} />;
//     } else if (isError) {
//         content = { error };
//     }

//     return content;
// };

// export default Men;
