import { createSlice } from "@reduxjs/toolkit";


interface visibleButtonState{
    value: boolean
}

const initialState : visibleButtonState = {
    value: true
}

export const visibleButtonSlice = createSlice({
    name: 'visibleButton',
    initialState,
    reducers: {
        toggleVisibleButton: (state) => {
            state.value = !state.value;
        }
    }
});

export const {toggleVisibleButton} = visibleButtonSlice.actions;
export default visibleButtonSlice.reducer;