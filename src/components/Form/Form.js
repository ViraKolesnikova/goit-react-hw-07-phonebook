import { useState } from 'react';
import shortid from 'shortid';
import { Oval } from 'react-loader-spinner';

import { useFetchContactsQuery, useSaveContactMutation } from '../../redux/phonebook/phonebook-reducer';
import s from './Form.module.css';

export default function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const { data:contacts } = useFetchContactsQuery();
  const [saveContact, { isLoading, error }] = useSaveContactMutation();

  const onSubmitAddContact = event => {
    event.preventDefault();
    const newContact = {
      name,
      phone,
    };

    if (checkContactIdentity() === undefined) {
      saveContact(newContact);
      reset();
    } else {
      alertIdentity(name);
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  const checkContactIdentity = () => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const alertIdentity = name => {
    alert(`${name} is already in your contacts!`);
    reset();
  };

  const nameID = shortid.generate();
  const numberID = shortid.generate();

  return (
    <>
    <form className={s.form} onSubmit={onSubmitAddContact}>
      <label className={s.label} htmlFor={nameID}>
        Name
      </label>
      <input
        id={nameID}
        className={s.input}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={e => setName(e.target.value)}
      />
      <label className={s.label} htmlFor={numberID}>
        Number
      </label>
      <input
        id={numberID}
        className={s.input}
        type="tel"
        name="number"
        value={phone}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={e => setPhone(e.target.value)}
      />
      <button className={s.formBtn} type="submit">
        Add contact
      </button>
      </form>
      <div className={s.loaderContainer}>
        {isLoading &&
          <Oval arialLabel="loading-indicator" radius='17.5' height='60' width='60' color='rgb(197 205 208 )' />}
      </div>
      {error && alert('something went wrong!')}
        </>
  );
}
