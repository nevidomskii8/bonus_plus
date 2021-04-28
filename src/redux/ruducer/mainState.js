import { createReducer } from '@reduxjs/toolkit'
import {
  fetchState,
  setChooseNav,
  setFocusActive,
  setFocusSection,
  setNav,
  setChooseGanre,
  setScheduleState,
  setStateCarusel,
} from '../actions/mainStateActions'

const initialState = {
  stateNav: 'tv',
  data: [],
  loading: false,
  error: null,
  focusSection: 'navigation',
  focusActive: 'tv',
  chooseNav: '',
  choosedGenre: '',
  scheduleState: '',
  stateCarusel: 0,
}

const mainState = createReducer(initialState, {
  [setNav.type]: (state, action) => {
    state.stateNav = action.payload
  },
  [fetchState.fulfilled]: (state, action) => {
    state.data = action.payload
    state.loading = false
  },
  [fetchState.pending]: (state, action) => {
    state.loading = true
  },
  [fetchState.rejected]: (state, action) => {
    state.loading = false
    state.error = action.payload
  },
  [setFocusSection.type]: (state, action) => {
    state.focusSection = action.payload
  },
  [setFocusActive.type]: (state, action) => {
    state.focusActive = action.payload
  },
  [setChooseNav.type]: (state, action) => {
    state.chooseNav = action.payload
  },
  [setChooseGanre.type]: (state, action) => {
    state.choosedGenre = action.payload
  },
  [setScheduleState.type]: (state, action) => {
    state.scheduleState = action.payload
  },
  [setStateCarusel.type]: (state, action) => {
    state.stateCarusel = action.payload
  },
})

export default mainState
