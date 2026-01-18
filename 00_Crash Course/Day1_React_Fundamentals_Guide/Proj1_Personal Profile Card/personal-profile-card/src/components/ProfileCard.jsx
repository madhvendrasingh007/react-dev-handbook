import React from 'react';
import './ProfileCard.css';

function ProfileCard({ name, title, bio, image }) {
  return (
    <div className="profile-card">

      <div className="profile-image">
        <img src={image} alt={name} />
      </div>

      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-title">{title}</p>
        <p className="profile-bio">{bio}</p>
      </div>

    </div>
  );
}

export default ProfileCard;