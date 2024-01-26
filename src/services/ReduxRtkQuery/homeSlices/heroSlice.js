import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";

const heroAdapter = createEntityAdapter();

const initialState = heroAdapter.getInitialState();

export const extendedHeroApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getHeroData: builder.query({
            query: () => "/hero",
            transformResponse: (responseData) => {
                return heroAdapter.setAll(initialState, responseData);
            },
            providesTags: ["hero"],
            // providesTags: (result, error, arg) => [
            //     { type: "hero", id: "data" },
            //     ...result.ids.map((id) => ({ type: "hero", id })),
            // ],
        }),
    }),
});

export const { useGetHeroDataQuery } = extendedHeroApiSlice;

export const selectResult = extendedHeroApiSlice.endpoints.getHeroData.select();

export const selectHeroData = createSelector(
    selectResult,
    (getResult) => getResult.data
);

export const {
    selectAll: selectAllHero,
    selectById: selectHeroById,
    selectIds: selectHeroIds,
} = heroAdapter.getSelectors((state) => selectHeroData(state) ?? initialState);
