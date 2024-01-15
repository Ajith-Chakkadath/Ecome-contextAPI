import { configureStore } from "@reduxjs/toolkit";
import tabSlice from "./tabSlice";

const store = configureStore({
    reducer : {
        tabSlice
    }
})

export default store