import { createReducer } from "@reduxjs/toolkit";
import { setNav } from "../actions/mainStateActions";


const initialState = {
    stateNav: 'tv',
    data: [],

};

const mainState = createReducer(initialState, {
    [setNav.type]: (state, action) => {
        state.stateNav = action.payload;
    },
});

export default mainState