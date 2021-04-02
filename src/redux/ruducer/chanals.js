import { createReducer } from "@reduxjs/toolkit";
import { fetchChanal } from "../actions/chanalAction";

const initialState = {
    loading: false,
    data: [],

};

const chanalStore = createReducer(initialState, {
    [fetchChanal.pending]: (state, action) => {
        state.data = action.payload;
        state.loading = false;
    },
    [fetchChanal.fulfilled]: (state) => {
        state.loading = true;
        state.error = null

    },
    [fetchChanal.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
});

export default chanalStore