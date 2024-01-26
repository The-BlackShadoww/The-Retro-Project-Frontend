import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";

const productAdapter = createEntityAdapter();

const initialState = productAdapter.getInitialState();

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProductData: builder.query({
            query: () => "/products", //! ** endpoint **
            transformResponse: (responseData) => {
                return productAdapter.setAll(initialState, responseData);
            },
            providesTags: ["products"],
        }),
    }),
});

export const { useGetProductDataQuery } = productApiSlice;

export const selectResult = productApiSlice.endpoints.getProductData.select();

export const selectData = createSelector(
    selectResult,
    (getResult) => getResult.data
);

export const {
    selectAll: selectAllProducts,
    selectById: selectProductsById,
    selectIds: selectProductIds,
} = productAdapter.getSelectors((state) => selectData(state) ?? initialState);
