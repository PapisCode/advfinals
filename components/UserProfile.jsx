import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ name, profilePicture, bio }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', width: '300px' }}>
      <img
        src={profilePicture}
        alt={`${name}'s profile`}
        style={{ width: '100%', borderRadius: '8px' }}
      />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default UserProfile;
