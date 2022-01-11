import PropTypes from 'prop-types';
import { Oval } from 'react-loader-spinner';

import { useDeleteContactsMutation } from '../../redux/phonebook/phonebook-reducer';
import s from './ContactItem.module.css';

export default function ContactItem({ id, name, phoneNumber }) {
  const [deleteContact, { isLoading }] = useDeleteContactsMutation();
  return (
    <>
      <li className={s.contactListItem}>
        <p className={s.contactContent}>
          {name}: <span>{phoneNumber}</span>
        </p>
        <button
          className={s.deleteContactBtn}
          type="button"
          onClick={() => deleteContact(id)}
        >
          Delete
      {isLoading && (
        <Oval
          arialLabel="loading-indicator"
          height="14"
          width="14"
          color="white"
        />
      )}
        </button>
      </li>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
