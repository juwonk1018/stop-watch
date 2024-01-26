import { createSlice } from "@reduxjs/toolkit";


interface progressState{
    value: boolean
}

const initialState : progressState = {
    value: false
}

export const progressSlice = createSlice({
    name: 'progress',
    initialState,
    reducers: {
        toggleProgress: (state) => {
            state.value = !state.value;
        },
        stopProgress: (state) => {
            state.value = false;
        }
    }
});

export const {toggleProgress, stopProgress} = progressSlice.actions;
export default progressSlice.reducer;