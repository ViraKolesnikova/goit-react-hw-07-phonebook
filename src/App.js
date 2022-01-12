import { Toaster } from 'react-hot-toast';

import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Wrapper from './components/Wrapper';
import Container from './components/Container';

export default function App() {
  return (
    <>
      <Wrapper>
        <Container>
          <h1>Phonebook</h1>
          <Form />
        </Container>
      </Wrapper>

      <Container>
        <h2>Contacts</h2>
        <Filter />

        <ContactList />
      </Container>

      <Toaster />
    </>
  );
}
