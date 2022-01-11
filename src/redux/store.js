import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { setupListeners } from '@reduxjs/toolkit/query'
import { contactsApi } from './phonebook/phonebook-reducer'

import { filterReducer } from './phonebook/phonebook-reducer';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const getDefaultMiddleware=()=>({
//   serializableCheck: {
//     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//   },
// });
  
export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), contactsApi.middleware]
});

setupListeners(store.dispatch);
