import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchState } from '../actions/mainStateActions';
import { RootState } from '../createStore';
import { MainStateModel } from '../types'

const initialState: MainStateModel = {
  data: [],
  loading: false,
  error: null,
  focusSection: 'navigation',
  focusActive: 'tv',
  chooseNav: 'string',
  choosedGenre: '',
  scheduleState: '',
  stateCarusel: 0,
  stateSettingList: ''
}


const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setFocusSection: (state, action: PayloadAction<string>) => {
      state.focusSection = action.payload;
    },
    setFocusActive: (state, action: PayloadAction<string>) => {
      state.focusActive = action.payload;
    },
    setChooseNav: (state, action: PayloadAction<string>) => {
      state.chooseNav = action.payload;
    },
    setChooseGanre: (state, action: PayloadAction<string>) => {
      state.choosedGenre = action.payload;
    },
    setScheduleState: (state, action: PayloadAction<string>) => {
      state.scheduleState = action.payload;
    },
    setStateCarusel: (state, action: PayloadAction<number>) => {
      state.stateCarusel = action.payload;
    },
    setStateSettingList: (state, action: PayloadAction<string>) => {
      state.stateSettingList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchState.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchState.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      });
  },
});


export const getChanals = (state: RootState) => state.state.data;
export const getChooseNav = (state: RootState) => state.state.chooseNav;
export const getFocusSection = (state: RootState) => state.state.focusSection;
export const getFocusActive = (state: RootState) => state.state.focusActive;
export const getChooseGenre = (state: RootState) => state.state.choosedGenre;
export const getScheduleState = (state: RootState) => state.state.scheduleState;
export const getStateCarusel = (state: RootState) => state.state.stateCarusel;
export const getStateSettingList = (state: RootState) => state.state.stateSettingList;

export const { setFocusSection, setFocusActive, setChooseNav, setChooseGanre, setScheduleState, setStateCarusel, setStateSettingList} = stateSlice.actions;

export default stateSlice.reducer
