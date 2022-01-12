import PropTypes from 'prop-types';

import s from './Wrapper.module.css';

export default function Wrapper({children}) {
  return <div className={s.Wrapper}>{ children}</div>
}

Wrapper.propTypes = {
  children: PropTypes.node
}