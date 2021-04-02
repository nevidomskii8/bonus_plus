import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import config from '../../config/config.json'

export const fetchChanal = createAsyncThunk('chanals/fetchChanals', async (activeItem) => {
  const data = axios.get(`${config.serverUrl}/api/chanals/types/${activeItem}`).then(
    res => res.data)
  return data;
});

export const setChanal = createAction('SET_CHANAL')
export const setEddinChanal = createAction('SET_EDDIT_CHANAL')