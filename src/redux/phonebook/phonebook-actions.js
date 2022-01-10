import { createAction } from "@reduxjs/toolkit";

export const fetchContactRequest = createAction('phonebook/fetchContactRequest');
export const fetchContactSuccess = createAction('phonebook/fetchContactSuccess');
export const fetchContactError = createAction('phonebook/fetchContactError');

export const saveContactRequest = createAction('phonebook/saveContactRequest');
export const saveContactSuccess = createAction('phonebook/saveContactSuccess');
export const saveContactError = createAction('phonebook/saveContactError');

export const deleteContactRequest = createAction('phonebook/deleteContactRequest');
export const deleteContactSuccess = createAction('phonebook/deleteContactSuccess');
export const deleteContactError = createAction('phonebook/deleteContactError');

// export const saveContact = createAction('phonebook/save');
// export const deleteContact = createAction('phonebook/delete');
// export const filterContacts = createAction('phonebook/filter');

export const changeFilter = createAction('phonebook/changeFilter')

 