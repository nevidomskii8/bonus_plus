import { createSelector } from '@reduxjs/toolkit'

export const getStateNav = createSelector(
  state => state.mainState.stateNav,
  stateNav => stateNav
);

export const getChanals = createSelector(
  state => state.mainState.data,
  data => data
)

export const getFocusSection = createSelector(
  state => state.mainState.focusSection,
  focusSection => focusSection
)
export const getFocusActive = createSelector(
  state => state.mainState.focusActive,
  focusActive => focusActive
)
export const getChooseNav = createSelector(
  state => state.mainState.chooseNav,
  chooseNav => chooseNav
)
export const getChooseGenre = createSelector(
  state => state.mainState.choosedGenre,
  chooseGenre => chooseGenre
)
export const getScheduleState = createSelector(
  state => state.mainState.scheduleState,
  scheduleState => scheduleState
)
