import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";

const newFeaturedAdapter = createEntityAdapter();

const initialState = newFeaturedAdapter.getInitialState();

export const newFeaturedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getNewFeaturedData: builder.query({
            query: () => "/newFeaturedProducts", //! ** endpoint **
            transformResponse: (responseData) => {
                return newFeaturedAdapter.setAll(initialState, responseData);
            },
            providesTags: ["newFeaturedProducts"],
        }),
    }),
});

export const { useGetNewFeaturedDataQuery } = newFeaturedApiSlice;

export const selectResult =
    newFeaturedApiSlice.endpoints.getNewFeaturedData.select();

export const selectData = createSelector(
    selectResult,
    (getResult) => getResult.data
);

export const {
    selectAll: selectAllNewFeatured,
    selectById: selectNewFeaturedById,
    selectIds: selectNewFeaturedIds,
} = newFeaturedAdapter.getSelectors(
    (state) => selectData(state) ?? initialState
);
