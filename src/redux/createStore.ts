import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import stateSlice from "./reducer/mainState";

export const store = configureStore({
  reducer: {
    state: stateSlice,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export default store;
