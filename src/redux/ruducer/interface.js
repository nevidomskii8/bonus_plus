import { createReducer } from "@reduxjs/toolkit";
import { setTypesInterface } from "../actions/interfaceAction";


const initialState = {
    loading: false,
    data: [],
};

const interfaceStore = createReducer(initialState, {
    [setTypesInterface.type]: (state, action) => {
        state.data = action.payload;
    },
});

export default interfaceStore