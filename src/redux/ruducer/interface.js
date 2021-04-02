import { createReducer } from "@reduxjs/toolkit";
import { } from '../action/interfaceAction'

const initialState = {
    loading: false,
    data: [],
};

const interfaceStore = createReducer(initialState, {
    [fetchPictures.type]: (state, action) => {
        state.data = action.payload;
    },
});

export default interfaceStore