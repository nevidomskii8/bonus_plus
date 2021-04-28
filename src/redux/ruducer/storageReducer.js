import { createReducer } from '@reduxjs/toolkit'
import { addState } from '../actions/storageAction'

let initialState

try {
  initialState = JSON.parse(localStorage.getItem('storage') || '[]')
} catch (e) {
  console.log('Local storage is empty')
}

export const storageReducer = createReducer(initialState, {
  [addState.type]: (state, action) => {
    state.push(action.payload)
  },
})

export default storageReducer
