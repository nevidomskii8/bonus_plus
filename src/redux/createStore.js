import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { orderLocalStorage } from './middlewares/orderLocalStorage';
import rootReducer from './rootReducer';

export default () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware().concat([
      orderLocalStorage
    ]),
    devTools: true,
  })
};