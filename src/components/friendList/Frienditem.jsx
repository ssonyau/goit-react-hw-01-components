import React from 'react';
import IsOnline from './IsOnline';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

const Frienditem = ({ avatar, name, isonline }) => {
  return (
    <li className={css.item}>
      <IsOnline status={isonline} />
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
Frienditem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isonline: PropTypes.bool.isRequired,
};
export default Frienditem;