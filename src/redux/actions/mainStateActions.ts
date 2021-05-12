import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchState = createAsyncThunk<any>("pictures/getState", async () => {
  const response = await axios.get(`http://localhost:3000/data.json`).then((res) => res.data);
  return response;
});
