import {  useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteContact } from '../../redux/phonebook/phonebook-operations';
import s from './ContactItem.module.css';

export default function ContactItem({ id, name, phoneNumber }) {
  const dispatch = useDispatch();
  return (
    <li className={s.contactListItem}>
      <p className={s.contactContent}>
        {name}: <span>{phoneNumber}</span>
      </p>
      <button
        className={s.deleteContactBtn}
        type="button"
        onClick={()=>dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
