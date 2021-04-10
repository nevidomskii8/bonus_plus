import { createAction, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from "axios";

export const setNav = createAction('SET_NAV')
export const setFocusSection = createAction('SET_FOCUS_SECTION')
export const setFocusActive = createAction('SET_FOCUS_ACTIVE')

export const fetchState = createAsyncThunk('getState', async () => {

    const data = await axios.get(`http://localhost:3000/data.json`).then(
        res => res.data
    );
    return data;
})