import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { JSON_API, JSON_API_2 } from "../API";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: JSON_API,
    }),
    tagTypes: [
        "hero",
        "products",
        "trending",
        "iconic",
        "sport",
        "community",
        "allGenderProducts",
        "newFeaturedProducts",
        "products",
        "postNewProduct",
    ], //* its updates the data when changed
    endpoints: (builder) => ({}),
});

export const apiSlice2 = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: JSON_API_2,
    }),
    tagTypes: ["postNewProduct"],
    endpoints: (builder) => ({}),
});
