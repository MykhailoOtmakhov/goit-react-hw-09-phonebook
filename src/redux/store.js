
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contacts/contacts-reducer'
import { authReducer } from './auth/index'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
  } from 'redux-persist';

const myMiddleware = store => next => action => {

  next(action);
}

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }), 
  myMiddleware,
  logger,
]

const authPersistConfig = {
  key: 'auth',
  storage,
  whiteList: ['token']
}

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        auth: persistReducer(authPersistConfig, authReducer),
    },
    middleware,
    devTools: process.env.NODE_ENV ==='development',
})

export const persistor = persistStore(store)

export default { store, persistor };
