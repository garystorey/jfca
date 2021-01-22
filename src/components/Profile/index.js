import React from 'react';
import './profile.scss';

export const Profile = ({user, loggedIn}) => {
    return loggedIn && (
    <div className="profile">
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
    </div>
    )
}