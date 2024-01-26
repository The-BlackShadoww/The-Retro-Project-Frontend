import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";

const communityAdapter = createEntityAdapter();

const initialState = communityAdapter.getInitialState();

export const communityApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCommunityData: builder.query({
            query: () => "/community",
            transformResponse: (responseData) => {
                return communityAdapter.setAll(initialState, responseData);
            },
            providesTags: ["community"],
        }),
    }),
});

export const { useGetCommunityDataQuery } = communityApiSlice;

export const selectResult =
    communityApiSlice.endpoints.getCommunityData.select();

export const selectData = createSelector(
    selectResult,
    (getResult) => getResult.data
);

export const {
    selectAll: selectAllCommunity,
    selectById: selectCommunityById,
    selectIds: selectCommunityIds,
} = communityAdapter.getSelectors((state) => selectData(state) ?? initialState);
