import React from 'react';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

const IsOnline = ({ status }) => {
  return status ? (
    <span className={css.isOnline}></span>
  ) : (
    <span className={css.status}></span>
  );
};

IsOnline.propTypes = {
  status: PropTypes.bool.isRequired,
};

export default IsOnline;