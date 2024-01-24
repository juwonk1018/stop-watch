import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeReducer";
import visibleButtonReducer from "./visibleButtonReducer";

export const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
        visibleButton: visibleButtonReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;