
import { combineReducers, configureStore,getDefaultMiddleware } from '@reduxjs/toolkit'
import { contactsSlice } from './contactsSlice'
import logger from 'redux-logger'

import {  persistStore,persistReducer, } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 


const contactsPersistConfig = {
    key: 'contacts',
      storage,
     blacklist: ['filter'],
    };
 
    const rootReducer=combineReducers({
    contacts:contactsSlice.reducer,
    filter:contactsSlice.reducer,
    })



const persistedReducer=persistReducer(contactsPersistConfig,rootReducer)

 export const store = configureStore({ 
  reducer:persistedReducer,
middleware:getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: ["persist/PERSIST"]
  }
  
}),
logger,
 })

export let persistor = persistStore(store);




