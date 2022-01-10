import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { fetchContacts} from '../../redux/phonebook/phonebook-operations';

import ContactItem from '../ContactItem';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filterWord = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterWord.toLowerCase()),
  );

  useEffect(() => {
    dispatch(fetchContacts());
  },[dispatch])

  return (
    <ul className={s.contactList}>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactItem
        key={id}
        id={id}
        name={name}
        phoneNumber={phone}          
        />
        ))}
    </ul>
        
  );
}
