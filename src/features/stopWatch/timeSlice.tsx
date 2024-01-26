import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface timeState{
    value: number,
    prev: number
}

const initialState : timeState = {
    value: 0,
    prev: 0
}

export const timeSlice = createSlice({
    name: 'time',
    initialState,
    reducers: {
        setTime: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },

        setPrevTime: (state, action: PayloadAction<number>) => {
            state.prev = action.payload;
        },

        clearTime: (state) => {
            state.value = 0;
            state.prev = 0;
        }
    }
});

export const {setTime, setPrevTime, clearTime} = timeSlice.actions;
export default timeSlice.reducer;