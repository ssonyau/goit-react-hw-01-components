import React from 'react';
import Stats from './Stats';
import css from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={tag} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <Stats stats={stats} />
    </div>
  );
};
Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  }).isRequired,
};
export default Profile;