import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import { 
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    addContactRequest,
    addContactSuccess, 
    addContactError, 
    removeContactRequest, 
    removeContactSuccess, 
    removeContactError, 
    changeFilter 
} from './contacts-actions'

const items = createReducer([], {
    [fetchContactSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state,{ payload }) => [...state, payload],
    [removeContactSuccess]: (state,{ payload }) => state.filter(({id})=>id !== payload)
})

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload, 
})

const loading = createReducer(false, {
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [removeContactRequest]: () => true,
    [removeContactSuccess]: () => false,
    [removeContactError]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
    items,
    filter,
    loading,
    error
})
