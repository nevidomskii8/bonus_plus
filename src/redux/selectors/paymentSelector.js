import { createSelector } from '@reduxjs/toolkit'

export const getPayment = createSelector(
  state => state.data,
  payment => payment
);
