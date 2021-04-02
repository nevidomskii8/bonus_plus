import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'
import chanalStore from './ruducer/chanals'
import interfaceStore from './ruducer/interface'
import paymentStore from './ruducer/payment'
import storageReducer from './ruducer/storageReducer'


export default combineReducers({
    chanals: chanalStore,
    configuration: configureStore,
    payment: paymentStore,
    interface: interfaceStore,
    storage: storageReducer,
    form: formReducer
})