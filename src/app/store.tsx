import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "../features/navBar/darkModeSlice";
import visibleButtonReducer from "../features/navBar/visibleButtonSlice";
import progressReducer from "../features/stopWatch/progressSlice";
import timeReducer from "../features/stopWatch/timeSlice";
import recordReducer from "../features/stopWatch/recordSlice";

export const store = configureStore({
    reducer: {
        time : timeReducer,
        darkMode: darkModeReducer,
        visibleButton: visibleButtonReducer,
        progress: progressReducer,
        record: recordReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;