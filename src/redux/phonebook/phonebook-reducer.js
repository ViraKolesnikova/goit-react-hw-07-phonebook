import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  saveContactRequest,
  saveContactSuccess,
  saveContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter
} from './phonebook-actions';

const itemsReducer = createReducer([], {
  [fetchContactSuccess]: (_, {payload}) => payload,
  [saveContactSuccess]: (state,{payload})=> [...state, payload],
  [deleteContactSuccess]: (state, {payload})=> state.filter(contact=>contact.id !==payload.id) 
})
  
const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
})

const loadingReducer = createReducer(false, {
  [fetchContactRequest]:()=> true,
  [fetchContactSuccess]:()=>false,
  [fetchContactError]:()=>false,
  [saveContactRequest]:()=>true,
  [saveContactSuccess]:()=>false,
  [saveContactError]:()=>false,
  [deleteContactRequest]:()=>true,
  [deleteContactSuccess]:()=>false,
  [deleteContactError]:()=>false,
})

const errorReducer = createReducer(null, {
  [fetchContactError]: (_, { payload }) => payload,
  [saveContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
  [fetchContactRequest]: () => null,
  [saveContactError]: () => null,
  [deleteContactError]: ()=>null  
})

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
})
