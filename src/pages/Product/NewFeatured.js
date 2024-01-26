import React from "react";
import { useSelector } from "react-redux";
import {
    useGetNewFeaturedDataQuery,
    selectAllNewFeatured,
} from "../../services/ReduxRtkQuery/productSlices/new&featuredSlice";
import ProductShowcase from "../../components/ProductShowcase/ProductShowcase";

const NewFeatured = () => {
    const {
        // data: Data,
        isLoading,
        isError,
        isSuccess,
        error,
    } = useGetNewFeaturedDataQuery();

    const data = useSelector(selectAllNewFeatured);

    let content;

    if (isLoading) {
        content = <p>Loading...</p>;
    } else if (isSuccess) {
        content = <ProductShowcase data={data} />;
    } else if (isError) {
        content = { error };
    }

    return content;
};

export default NewFeatured;
