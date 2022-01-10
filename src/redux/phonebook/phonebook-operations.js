import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  saveContactRequest,
  saveContactSuccess,
  saveContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './phonebook-actions';

const BASE_URL = 'https://61daf7c14593510017aff746.mockapi.io/api/contacts';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

export const saveContact = newContact => async dispatch => {
  const options = {
    method: 'POST',
    body: JSON.stringify(newContact),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  dispatch(saveContactRequest());

  try {
    const response = await fetch(BASE_URL, options);
    const data = await response.json();
    dispatch(saveContactSuccess(data));
  } catch (error) {
    dispatch(saveContactError(error));
  }
};

export const deleteContact = (id) => async dispatch => {
  dispatch(deleteContactRequest());
  const options = {
    method: 'DELETE',    
  }
  try {
    const response = await fetch(BASE_URL+`/${id}`, options);
    const data = await response.json();
    dispatch(deleteContactSuccess(data))
  } catch (error) {
    dispatch(deleteContactError(error));
  }
}
