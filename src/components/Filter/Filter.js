import { useSelector, useDispatch } from 'react-redux';

import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import s from './Filter.module.css';

export default function Filter() {
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <label className={s.filterLabel}>
      Find contacts by name
      <input
        type="text"
        value={filterValue}
        className={s.filterInput}
        onChange={e => dispatch(changeFilter(e.target.value))}
        onBlur={e => dispatch(changeFilter(''))}
      />
    </label>
  );
}
