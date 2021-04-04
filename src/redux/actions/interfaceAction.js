import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
// import config from '../../config/config.json'

// export const fetchPictures = createAsyncThunk('pictures/fetchPictures', async (activeItem) => {
//   const data = axios.get(`${config.serverUrl}/api/pictures/types/${activeItem}`).then(
//     res => res.data)
//   return data;
// });

export const setTypesInterface = createAction('SET_TYPES_OF_INTERFACE')
export const setStateEdditInterface = createAction('SET_EDDIT_INTERFACE')