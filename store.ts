import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export type RootState = {
    counterReducer: ReturnType<typeof counterSlice>
}

export const store = configureStore({
    reducer: {
        counterReducer: counterSlice,
    },
});