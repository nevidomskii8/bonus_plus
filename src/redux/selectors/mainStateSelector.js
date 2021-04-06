import { createSelector } from '@reduxjs/toolkit'

export const getStateNav = createSelector(
  state => state.mainState.stateNav,
  stateNav => stateNav
);

export const getChanals = createSelector(
  state => state.mainState.data,
  data => data
)