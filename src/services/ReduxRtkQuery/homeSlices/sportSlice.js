import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";

const sportAdapter = createEntityAdapter();

const initialState = sportAdapter.getInitialState();

export const sportApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSportData: builder.query({
            query: () => "/sport",
            transformResponse: (responseData) => {
                return sportAdapter.setAll(initialState, responseData);
            },
            providesTags: ["sport"],
        }),
    }),
});

export const { useGetSportDataQuery } = sportApiSlice;

export const selectResult = sportApiSlice.endpoints.getSportData.select();

export const selectData = createSelector(
    selectResult,
    (getResult) => getResult.data
);

export const {
    selectAll: selectAllSport,
    selectById: selectSportById,
    selectIds: selectSportIds,
} = sportAdapter.getSelectors((state) => selectData(state) ?? initialState);
