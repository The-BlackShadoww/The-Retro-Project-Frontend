import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice2 } from "../apiSlice";

const buildProductAdapter = createEntityAdapter();

const initialState = buildProductAdapter.getInitialState();

export const postProductApiSlice = apiSlice2.injectEndpoints({
    endpoints: (builder) => ({
        postNewProduct: builder.mutation({
            query: (postData) => ({
                url: "/products",
                method: "POST",
                body: postData,
                // headers:{}
            }),
            transformResponse: (responseData) => {
                return buildProductAdapter.setAll(initialState, responseData);
            },
            providesTags: ["postNewProduct"],
        }),
    }),
});

export const { usePostNewProductMutation } = postProductApiSlice;

export const selectResult =
    postProductApiSlice.endpoints.postNewProduct.select();

export const selectData = createSelector(
    selectResult,
    (getResult) => getResult.data
);

export const {
    selectAll: selectAllProducts,
    selectById: selectProductsById,
    selectIds: selectProductsIds,
} = buildProductAdapter.getSelectors(
    (state) => selectData(state) ?? initialState
);
