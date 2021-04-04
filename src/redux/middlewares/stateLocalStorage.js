import { addState, removeState } from '../actions/storageAction'

export const stateLocalStorage = store => next => action => {

    if ([addState.type, removeState.type].includes(action.type)) {
        next(action);
        const nextState = store.getState();
        try {
            localStorage.setItem('stateStorege', JSON.stringify(nextState.storage));
        } catch (e) {
            console.log('ERROR SAVING STATE')
        }
        return;
    }
    return next(action);
};