import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'
import mainState from './ruducer/mainState'
import storageReducer from './ruducer/storageReducer'


const store = configureStore({
    reducer: combineReducers({
        mainState: mainState,
        form: formReducer
    })
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
