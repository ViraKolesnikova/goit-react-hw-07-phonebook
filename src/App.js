import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter />

      <ContactList />
    </>
  );
}
