import { useSelector } from 'react-redux';
import { Oval } from 'react-loader-spinner';

import { useFetchContactsQuery } from '../../redux/phonebook/phonebook-reducer';
import { getFilterWord } from '../../redux/phonebook/phonebook-selectors';
import ContactItem from '../ContactItem';
import s from './ContactList.module.css';

export default function ContactList() {
  const filterWord = useSelector(getFilterWord);
  const { data, error, isLoading } = useFetchContactsQuery();

  const getfilteredContacts = contacts =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterWord.toLowerCase()),
    );

  const filteredContacts = data ? getfilteredContacts(data) : null;

  return (
    <>
      {isLoading && (
        <Oval
          arialLabel="loading-indicator"
          radius="17.5"
          height="60"
          width="60"
          color="rgb(197 205 208 )"
        />
      )}
      {error && alert('Ooops...')}
      <ul className={s.contactList}>
        {data &&
          filteredContacts.map(({ id, name, phone }) => (
            <ContactItem key={id} id={id} name={name} phoneNumber={phone} />
          ))}
      </ul>
    </>
  );
}
