import { createReducer } from "@reduxjs/toolkit";
import { fetchPayment } from "../actions/paymentAction";

const initialState = {
  loading: false,
  data: [],
};

const paymentStore = createReducer(initialState, {
    [fetchPayment.pending]: (state, action) => {
        state.data = action.payload;
        state.loading = false;
    },
    [fetchPayment.fulfilled]: (state) => {
        state.loading = true;
        state.error = null

    },
    [fetchPayment.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
});

export default paymentStore