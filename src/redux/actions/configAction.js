import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import config from '../../config/config.json'

export const fetchConfig = createAsyncThunk('config/fetchCongig', async (activeItem) => {
  const data = axios.get(`${config.serverUrl}/api/config/types/${activeItem}`).then(
    res => res.data)
  return data;
});

export const setConfig = createAction('SET_CONFIG')
export const setConfig = createAction('SET_EDDIT_CONFIG')