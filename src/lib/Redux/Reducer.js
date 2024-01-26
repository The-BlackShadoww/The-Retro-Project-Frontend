import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../../services/ReduxRtkQuery/apiSlice";

const RootReducer = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export default RootReducer;
