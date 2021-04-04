import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { stateLocalStorage } from './middlewares/stateLocalStorage';
import rootReducer from './rootReducer';

export default () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware().concat([
      stateLocalStorage
    ]),
    devTools: true,
  })
};