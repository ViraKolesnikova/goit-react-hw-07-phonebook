import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { contactsApi } from './phonebook/phonebook-reducer';
import { filterReducer } from './phonebook/phonebook-reducer';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), contactsApi.middleware]
});

setupListeners(store.dispatch);
