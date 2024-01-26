import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";

const allGenderAdapter = createEntityAdapter();

const initialState = allGenderAdapter.getInitialState();

export const allGenderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllGenderData: builder.query({
            query: () => "/allGenderProducts", //! ** endpoint **
            transformResponse: (responseData) => {
                return allGenderAdapter.setAll(initialState, responseData);
            },
            providesTags: ["allGenderProducts"],
        }),
    }),
});

export const { useGetAllGenderDataQuery } = allGenderApiSlice;

export const selectResult =
    allGenderApiSlice.endpoints.getAllGenderData.select();

export const selectData = createSelector(
    selectResult,
    (getResult) => getResult.data
);

export const {
    selectAll: selectAllGenderProduct,
    selectById: selectGenderProductById,
    selectIds: selectGenderProductIds,
} = allGenderAdapter.getSelectors((state) => selectData(state) ?? initialState);
