const getContacts = state => state.contacts.items;

const getFilterWord = state => state.filter;

const getFilteredContacts = state => {
  const contacts = getContacts(state);
  const filterWord = getFilterWord(state);

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterWord.toLowerCase()),
  );
}

export {
  getContacts,
  getFilterWord,
  getFilteredContacts
}