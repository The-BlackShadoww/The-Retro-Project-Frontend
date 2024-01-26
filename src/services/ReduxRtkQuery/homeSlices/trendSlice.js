import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";

const trendAdapter = createEntityAdapter();

const initialState = trendAdapter.getInitialState();

export const trendApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTrendData: builder.query({
            query: () => "/trending",
            transformResponse: (responseData) => {
                return trendAdapter.setAll(initialState, responseData);
            },
            providesTags: ["trending"],
            // providesTags: (result, error, arg) => [
            //     { type: "trending", id: "data" },
            //     ...result.ids.map((id) => ({ type: "trending", id })),
            // ],
        }),
    }),
});

export const { useGetTrendDataQuery } = trendApiSlice;

export const selectResult = trendApiSlice.endpoints.getTrendData.select();

export const selectData = createSelector(
    selectResult,
    (getResult) => getResult.data
);

export const {
    selectAll: selectAllTrend,
    selectById: selectTrendById,
    selectIds: selectTrendIds,
} = trendAdapter.getSelectors((state) => selectData(state) ?? initialState);
