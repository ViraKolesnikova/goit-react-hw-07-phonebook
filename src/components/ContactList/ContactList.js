import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { fetchContacts } from '../../redux/phonebook/phonebook-operations';
import {getFilteredContacts} from '../../redux/phonebook/phonebook-selectors'

import ContactItem from '../ContactItem';
import s from './ContactList.module.css';

export default function ContactList() {
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();  

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
