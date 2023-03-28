import React from 'react';
import Frienditem from './Frienditem';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendlist}>
      {friends.map(value => (
        <Frienditem
          key={value.id}
          avatar={value.avatar}
          name={value.name}
          isonline={value.isOnline}
        />
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default FriendList;