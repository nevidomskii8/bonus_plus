import { createReducer } from "@reduxjs/toolkit";
import { fetchState, setFocusActive, setFocusSection, setNav } from "../actions/mainStateActions";


const initialState = {
    stateNav: 'tv',
    data: [],
    loading: false,
    error: null,
    focusSection: 'nav-menu',
    focusActive: 'tv'

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
    [setFocusSection.type]: (state, action) => {
        state.focusSection = action.payload;
    },
    [setFocusActive.type]: (state, action) => {
        state.focusActive = action.payload
    }
});

export default mainState