import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useRef } from "react";

interface recordState{
    recordID : number,
    value: string[][]
}

const initialState : recordState = {
    recordID : 1,
    value: []
}

type addRecordType = {
    lab : string,
    total : string
}

export const recordSlice = createSlice({
    name: 'record',
    initialState,
    reducers: {
        addRecord: (state, action : PayloadAction<addRecordType>) => {
            state.value.push([state.recordID.toString(), action.payload.lab, action.payload.total]);
            state.recordID += 1
        },

        deleteRecord: (state, action : PayloadAction<string>) => {
            state.value = state.value.filter((record : (string|number)[]) => record[0] != action.payload);
        },

        deleteAllRecords: (state) => {
            state.recordID = 1;
            state.value = [];
        }
    }
});

export const {addRecord, deleteRecord, deleteAllRecords} = recordSlice.actions;
export default recordSlice.reducer;