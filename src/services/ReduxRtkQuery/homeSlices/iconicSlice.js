import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";

const iconicAdapter = createEntityAdapter();

const initialState = iconicAdapter.getInitialState();

export const iconicApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getIconicData: builder.query({
            query: () => "/iconic",
            transformResponse: (responseData) => {
                return iconicAdapter.setAll(initialState, responseData);
            },
            providesTags: ["iconic"],
        }),
    }),
});

export const { useGetIconicDataQuery } = iconicApiSlice;

export const selectResult = iconicApiSlice.endpoints.getIconicData.select();

export const selectData = createSelector(
    selectResult,
    (getResult) => getResult.data
);

export const {
    selectAll: selectAllIconic,
    selectById: selectIconicById,
    selectIds: selectIconicIds,
} = iconicAdapter.getSelectors((state) => selectData(state) ?? initialState);
