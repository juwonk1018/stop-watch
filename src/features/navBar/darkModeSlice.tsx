import { createSlice } from "@reduxjs/toolkit";


interface darkModeState{
    value: boolean
}

const initialState : darkModeState = {
    value: false
}

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.value = !state.value;
        }
    }
});

export const {toggleDarkMode} = darkModeSlice.actions;
export default darkModeSlice.reducer;