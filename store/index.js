import { configureStore } from "@reduxjs/toolkit";
import batterSlice from "./batterSlice";

const store = configureStore({
    reducer: {
        batters: batterSlice.reducer
    }
})

export default store;