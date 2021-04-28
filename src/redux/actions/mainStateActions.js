import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const setNav = createAction('SET_NAV')
export const setFocusSection = createAction('SET_FOCUS_SECTION')
export const setFocusActive = createAction('SET_FOCUS_ACTIVE')
export const setChooseNav = createAction('SET_CHOOSE_NAV')
export const setChooseGanre = createAction('SET_CHOOSE_GANRE')
export const setScheduleState = createAction('SET_SCHEDULE_STATE')
export const setStateCarusel = createAction('SET_STATE_CARUSEL')

export const fetchState = createAsyncThunk('getState', async () => {
  const data = await axios
    .get(`http://localhost:3000/data.json`)
    .then((res) => res.data)
  return data
})
