import { createReducer } from "@reduxjs/toolkit";
import { fetchState, setNav } from "../actions/mainStateActions";


const initialState = {
    stateNav: 'tv',
    data: [],
    loading: false,
    error: null
};

const mainState = createReducer(initialState, {
    [setNav.type]: (state, action) => {
        state.stateNav = action.payload;
    },
    [fetchState.fulfilled]: (state, action) => {

        state.data = action.payload;
        state.loading = false
    },
    [fetchState.pending]: (state, action) => {
        state.loading = true
    },
    [fetchState.rejected]: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
});

export default mainState