import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setNav = createAction('SET_NAV')

export const fetchState = createAsyncThunk('getState', async () => {

    const data = await axios.get(`http://localhost:3000/data.json`).then(
        res => res.data
    );
    return data;
})