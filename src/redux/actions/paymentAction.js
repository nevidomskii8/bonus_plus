import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import config from '../../config/config.json'

export const fetchPayment = createAsyncThunk('paymaent/fetchPayment', async (activeItem) => {
  const data = axios.get(`${config.serverUrl}/api/payment/types/${activeItem}`).then(
    res => res.data)
  return data;
});

export const setPayment = createAction('SET_PAYMENT')